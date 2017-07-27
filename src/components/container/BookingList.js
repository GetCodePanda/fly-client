import React , { Component } from 'react';
import BookingListP from '../presentational/BookingListP';

class BookingList extends Component{
     constructor(){
        super();
        this.state = {
            data : {
                booking:[]
            }
        }
        this.getBooking = this.getBooking.bind(this);
    }

    getBooking(){
        fetch('http://localhost:3030/booking')
            .then(res => res.json())
            .then(res => {
                const booking =  res.data;
                // console.log(booking);
                return this.setState({
                    data:{
                        booking
                    }
                });
            });
    }

    componentWillMount(){
        return this.getBooking();
    }

    render(){
        return (
            <BookingListP booking={this.state.data.booking} />
        )
    }
}

export default BookingList;