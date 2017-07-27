const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const localStorage = require('localstorage-memory');
const auth = require('feathers-authentication-client');

const app = feathers();

app.configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth({ storage: localStorage }));

app.authenticate({
  strategy: 'local',
  email: 'admin@vpageinc.com',
  password: 'admin'
})
.then(response => {
  console.log('Authenticated!', response);
  return app.passport.verifyJWT(response.accessToken);
})
.then(payload => {
  console.log('JWT Payload', payload);
  return app.service('users').get(payload.userId);
})
.then(user => {
  app.set('user', user);
  console.log('User', app.get('user'));
})
.catch(function(error){
  console.error('Error authenticating!', error);
});