import flyClientApp from './index';
import fetch from 'node-fetch';

const vehicle = flyClientApp.service('vehicle').before({
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

// const vehicle = flyClientApp.service('vehicle');


export const createNewVehicle = (vehicleObj) => {
    return vehicle.create(vehicleObj)
}


export const getVehicle = (option) => {
     return fetch("http://localhost:3030/vehicle",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return vehicle.find(option)
        })
}

export const getSingleVehicle = (id)=>{
  return fetch("http://localhost:3030/vehicle",{
          method:'GET',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              console.log(r);
              return vehicle.get(id);
      })
}

export const editSingleVehicle = (id, option) =>{
  return fetch("http://localhost:3030/vehicle/"+id,{
          method:'PUT',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              return vehicle.patch(id, option);
      })
}

export const deleteSingleVehicle = (id, option) =>{
  return fetch("http://localhost:3030/vehicle/"+id,{
          method:'DELETE',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              return vehicle.remove(id, option);
      })
}