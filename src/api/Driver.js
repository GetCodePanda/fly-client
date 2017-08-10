import flyClientApp from './index';
import fetch from 'node-fetch';

const driver = flyClientApp.service('driver').before({
    all: [
       (hook) => ({
         ...hook,
         params: {
           ...hook.params ,// this is the new line to be included
           sequelize: {
             include: [{all:true}]
           }
         }
      })
    ]
  });

// const driver = flyClientApp.service('driver');


export const createNewDriver = (driverObj) => {
    return driver.create(driverObj)
}

export const getDriver = (option)=>{
     return fetch("http://localhost:3030/driver",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return driver.find(option)
        })
}