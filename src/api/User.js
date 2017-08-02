import flyClientApp from './index';


const users = flyClientApp.service('users');


export const createNewUser = (userObj) => {
    return users.create(userObj)
}

export const loginUser = (email , password) => {
    return flyClientApp.authenticate({
    strategy: 'local',
    email,
    password
  })
}

