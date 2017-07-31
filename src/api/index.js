const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const hooks = require('feathers-hooks');
const localStorage = require('localstorage-memory');
const auth = require('feathers-authentication-client');
const superagent = require('superagent');

const host = 'http://localhost:3030';
const flyClienApp = feathers()
  .configure(hooks())
  .configure(rest(host).superagent(superagent))
  .configure(auth({ storage: localStorage }))



export default flyClienApp;