import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Card ,Header, Button} from 'semantic-ui-react';

import {getBooking} from './../../api/Booking';

import BookingCard from './../_display/BookingCard';


class BookingContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                booking:[]
            }
        }
    }

    setBookingData(){
        return getBooking({
                     paginate: {
                        default: 2,
                        max: 4
                    }
                })
                .then(res=>{
                    console.log(res.data)
                    return this.setState({
                        data:{
                            booking:res.data
                        }
                    }) 
                });
    }

    componentDidMount(){
        return this.setBookingData();
    }

    render(){
        return(
            <div className="content-wrapper">
                <Header as='h2' dividing>
                     Booking
                </Header>

                <div className="sub-content-wrapper">
                 
                    <Button icon='archive' color='purple' content='Delete' labelPosition='left' floated="left"/>
                    <Button icon='download'  color='purple' content='Export' labelPosition='left' floated="left"/>
                    <NavLink to="/user/booking/new">
                        <Button content='Create New' color='purple' icon='plus' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/><br/><br/><br/><br/>
                  
                    <Card.Group itemsPerRow={2}>
                        {console.log(this.state.data.booking)}
                        <BookingCard data={this.state.data.booking}/>
                    </Card.Group>
                    <br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default BookingContent;