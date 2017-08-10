import flyClientApp from './index';
import fetch from 'node-fetch';

const plan = flyClientApp.service('plan').before({
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

// const plan = flyClientApp.service('plan');


export const createNewPlan = (planObj) => {
    return plan.create(planObj)
}

export const getPlan = (option) => {
     return fetch("http://localhost:3030/plan",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return plan.find(option)
        })
}
