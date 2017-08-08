import React , {Component} from 'react';
import {Card ,Header, Button} from 'semantic-ui-react';
import BookingCard from './display/BookingCard';

import {getBooking} from './../api/User';


class BookingContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                booking:[],
                tableHeader:[]
            }
        }
    }

    setBookingData(){
         return getBooking({
                     paginate: {
                        default: 2,
                        max: 4
                    },
                    sequelize: {
                        include: [{ all: true }]
                    }
          
            }).then(res=>{
                return this.setState({
                    data:{
                        booking:res.data,
                        tableHeader:Object.keys(res.data[0])
                    }
                }) 
            });
    }

    componentWillMount(){
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
                    <Button content='Create New' color='purple' icon='plus' floated="right" labelPosition='left'/>
                    <br/><br/><br/><br/><br/><br/>
                  
                    <Card.Group itemsPerRow={3}>
                        <BookingCard data={this.state.data.booking}/>
                    </Card.Group>
                    <br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default BookingContent;