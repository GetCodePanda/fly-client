import flyClientApp from './index';
import fetch from 'node-fetch';

const customer = flyClientApp.service('customers').before({
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

// const customer = flyClientApp.service('customers');


export const createNewCustomer = (customerObj) => {
    return customer.create(customerObj)
}


export const getCustomer = (option)=>{
     return fetch("http://localhost:3030/customers",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return customer.find(option)
        })
}

export const getSingleCustomer = (id)=>{
  return fetch("http://localhost:3030/booking/",{
          method:'GET',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              console.log(r);
              return customer.get(id);
      })
}