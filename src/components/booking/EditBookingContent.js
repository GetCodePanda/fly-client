import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSingleBooking} from './../../api/Booking';


class EditBookingContent extends  Component{
    constructor(){
        super();
        this.state = {
                customerName:'',
                pickUpLocation:"",
                dropLocation:"",
                fromDate:"",
                toDate:"",
                startingKm:"",
                endingKm:"",
                totalKm:"",
                chargePerKm:"",
                driverCharge:"",
                extraCharge:"",
                extraChargeDesc:"",
                totalCharge:"",
                paymentType:"",
                accountNo:"",
                paymentStatus:"",
                driverName:"",
                vehicleName:""
        }
        this.getOldBookingData = this.getOldBookingData.bind(this)
        this.updateBooking = this.updateBooking.bind(this)
    }

    getOldBookingData(){
        getSingleBooking(window.location.search.substr(4))
        .then((res)=>{
            console.log(res)
            this.setState({
                customerName:'',
                pickUpLocation:res.pickUpLocation,
                dropLocation:"",
                fromDate:"",
                toDate:"",
                startingKm:"",
                endingKm:"",
                totalKm:"",
                chargePerKm:"",
                driverCharge:"",
                extraCharge:"",
                extraChargeDesc:"",
                totalCharge:"",
                paymentType:"",
                accountNo:"",
                paymentStatus:"",
                driverName:"",
                vehicleName:""
            });
        })
    }

    updateBooking(e){
       e.preventDefault();
       console.log({
           title:this.refs.title.nodeValue
       })
    }

    componentDidMount(){
        this.getOldBookingData();
    }

    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Edit Booking
                    </Header>
                    <NavLink to="/user/booking">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updateBooking}>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Pick Up Location' 
                                required
                                ref={(input)=>this.title=input}
                            />
                        </Form.Group>

                       
                        
                        <Button 
                            color="purple" 
                            content='Update' 
                            icon='upload' 
                            labelPosition='left'
                            type='submit'
                        >
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}


export default EditBookingContent;