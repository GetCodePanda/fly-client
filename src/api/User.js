import flyClientApp from './index';
import fetch from 'node-fetch';


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

export const getUsers = (option) => {
    return fetch("http://localhost:3030/users",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return users.find(option)
        })
}


export const editSingleUsers = (id, option) =>{
    return fetch("http://localhost:3030/users/"+id,{
            method:'PUT',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return users.patch(id, option);
        })
  }
  
  export const deleteSingleUsers = (id, option) =>{
    return fetch("http://localhost:3030/users/"+id,{
            method:'DELETE',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return users.remove(id, option);
        })
  }