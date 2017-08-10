import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {createNewBooking} from './../../api/Booking';

class CreateNewBookingContent extends  Component{
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
        this.onInputChange = this.onInputChange.bind(this)
        this.createBooking = this.createBooking.bind(this)
    }

    onInputChange(e){
        this.setState({
                [e.target.name]:e.target.value
        });
    }

    createBooking(e){
        e.preventDefault();
        createNewBooking(this.state).then(res=>{
            alert("user created successfully");
            console.log(res);
            this.setState({
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
            })
        });
        console.log(this.state)
    }

    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Create New Booking
                    </Header>
                    <NavLink to="/user/booking">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>
                <Container>
                    <Form onSubmit={this.createBooking}>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Customer Name' 
                                placeholder='eg.Vijay' 
                                required
                                name='customerName'
                                onChange={this.onInputChange}
                                value={this.state.customerName}

                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Pick Up Location' 
                                placeholder='eg. villupuram'
                                required
                                name='pickUpLocation'
                                onChange={this.onInputChange}
                                value={this.state.pickUpLocation}
                            />
                            <Form.Input 
                                label='Drop Location' 
                                placeholder='eg. chennai' 
                                required
                                name='dropLocation'
                                onChange={this.onInputChange}
                                value={this.state.dropLocation}
                            />
                            
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='From Date' 
                                placeholder='eg. 2017-07-07' 
                                required
                                name='fromDate'
                                onChange={this.onInputChange}
                                value={this.state.fromDate}
                            />
                            <Form.Input 
                                label='To Date' 
                                placeholder='eg.2017-07-07'
                                required
                                name='toDate'
                                onChange={this.onInputChange}
                                value={this.state.toDate}
                            />     
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Starting Km' 
                                placeholder='eg. 122222' 
                                name='startingKm'
                                onChange={this.onInputChange}
                                value={this.state.startingKm}
                            />
                            <Form.Input 
                                label='Ending Km' 
                                placeholder='eg. 122999'
                                name='endingKm'
                                onChange={this.onInputChange}
                                value={this.state.endingKm}
                            /> 
                            <Form.Input 
                                label='Total Travelled Km' 
                                placeholder='eg. 777'
                                name='totalKm'
                                onChange={this.onInputChange}
                                value={this.state.totalKm}
                            />       
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Charge Per Km' 
                                placeholder='eg. 50' 
                                name='chargePerKm'
                                onChange={this.onInputChange}
                                value={this.state.chargePerKm}

                            />
                            <Form.Input 
                                label='Driver Charge' 
                                placeholder='eg. 50' 
                                name='driverCharge'
                                onChange={this.onInputChange}
                                value={this.state.driverCharge}

                            />
                            <Form.Input 
                                label='Extra Charge' 
                                placeholder='eg. 50' 
                                name='extraCharge'
                                onChange={this.onInputChange}
                                value={this.state.extraCharge}

                            />
                        </Form.Group>
                        
                        <Form.Group widths='equal'>
                            <Form.TextArea 
                                label='Extra Charge Description' 
                                placeholder='eg Tell us more about extra charge...' 
                                name='extraChargeDesc'
                                onChange={this.onInputChange}
                                value={this.state.extraChargeDesc}

                            />
                        </Form.Group>

                         <Form.Group widths='equal'>
                            <Form.Input 
                                label='Total Charge' 
                                placeholder='eg. 25000' 
                                name='totalCharge'
                                onChange={this.onInputChange}
                                value={this.state.totalCharge}
                            />
                            <Form.Input 
                                label='Payment type' 
                                placeholder='eg. cash' 
                                name='paymentType'
                                onChange={this.onInputChange}
                                value={this.state.paymentType}
                            />
                        </Form.Group>
                       
                       
                        
                        <Button 
                            color="purple" 
                            content='Create new Booking' 
                            icon='plus' 
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


export default CreateNewBookingContent;