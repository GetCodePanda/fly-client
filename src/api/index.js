const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');
const fetch = require('node-fetch');

const host = 'http://localhost:3030';
const flyClienApp = feathers()
  .configure(hooks())
  .configure(rest(host).fetch(fetch))
  .configure(auth({ storage: window.localStorage}));
export default flyClienApp;