import flyClientApp from './index';
import fetch from 'node-fetch';

const tax = flyClientApp.service('tax').before({
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

// const tax = flyClientApp.service('tax');


export const createNewTax = (taxObj) => {
    return tax.create(taxObj)
}

export const getTax = (option) => {
     return fetch("http://localhost:3030/tax",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return tax.find(option)
        })
}


export const getSingleTax = (id)=>{
  return fetch("http://localhost:3030/tax",{
          method:'GET',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              console.log(r);
              return tax.get(id);
      })
}

export const editSingleTax = (id, option) =>{
  return fetch("http://localhost:3030/tax/"+id,{
          method:'PUT',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              return tax.patch(id, option);
      })
}

export const deleteSingleTax = (id, option) =>{
  return fetch("http://localhost:3030/tax/"+id,{
          method:'DELETE',
          headers:{
              "Authorization":localStorage.getItem('feathers-jwt')
          }
      }).then((r)=>{
              return tax.remove(id, option);
      })
}