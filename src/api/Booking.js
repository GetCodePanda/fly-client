import flyClientApp from './index';
import fetch from 'node-fetch';

const booking = flyClientApp.service('booking').before({
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

// const booking = flyClientApp.service('booking');


export const createNewBooking = (bookingObj) => {
    return booking.create(bookingObj)
}

export const getBooking = (option)=>{
     return fetch("http://localhost:3030/booking",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                
                return booking.find(option)
        })
}

export const getSingleBooking = (id)=>{
    return fetch("http://localhost:3030/booking/",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                console.log(r);
                return booking.get(id);
        })
}

export const editSingleBooking = (id, option) =>{
    return fetch("http://localhost:3030/booking/"+id,{
            method:'PUT',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return booking.patch(id, option);
        })
}

export const deleteSingleBooking = (id, option) =>{
    return fetch("http://localhost:3030/booking/"+id,{
            method:'DELETE',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return booking.remove(id, option);
        })
}

