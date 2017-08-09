import flyClientApp from './index';
import fetch from 'node-fetch';



const booking = flyClientApp.service('booking');


export const createNewUser = (bookingObj) => {
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
    return fetch("http://localhost:3030/booking",{
            method:'GET',
            headers:{
                "Authorization":localStorage.getItem('feathers-jwt')
            }
        }).then((r)=>{
                return booking.find({
                    query: {
                        bookingID: id
                    }
                })
        })
}