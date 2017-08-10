import flyClientApp from './index';
import fetch from 'node-fetch';

const vendor = flyClientApp.service('vendor').before({
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

// const vendor = flyClientApp.service('vendor');


export const createNewVendor = (vendorObj) => {
    return vendor.create(vendorObj)
}


export const getVendor = (option) => {
     return fetch("http://localhost:3030/vendor",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return vendor.find(option)
        })
}
