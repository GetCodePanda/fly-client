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

export const getSingleDriver = (id)=>{
  return fetch("http://localhost:3030/driver/",{
          method:'GET',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              console.log(r);
              return driver.get(id);
      })
}

export const editSingleDriver = (id, option) =>{
  return fetch("http://localhost:3030/driver/"+id,{
          method:'PUT',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              return driver.patch(id, option);
      })
}

export const deleteSingleDriver = (id, option) =>{
  return fetch("http://localhost:3030/driver/"+id,{
          method:'DELETE',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              return driver.remove(id, option);
      })
}