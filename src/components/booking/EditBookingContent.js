import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSingleBooking , editSingleBooking , deleteSingleBooking} from './../../api/Booking';


class EditBookingContent extends  Component{

    constructor(){
        super();
        this.state = {
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
        
        this.getOldBookingData = this.getOldBookingData.bind(this);
        this.updateBooking = this.updateBooking.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getOldBookingData(){
        getSingleBooking(window.location.search.substr(4))
        .then((res)=>{
            console.log(res)


            const fromDate = res.fromDate;
            const toDate = res.toDate;
            

            return this.setState({
                pickUpLocation:res.pickUpLocation,
                dropLocation:res.dropLocation,
                fromDate,
                toDate,
                startingKm:res.startingKm,
                endingKm:res.endingKm,
                totalKm:res.totalKm,
                chargePerKm:res.chargePerKm,
                driverCharge:res.driverCharge,
                extraCharge:res.extraCharge,
                extraChargeDesc:res.extraChargeDesc,
                totalCharge:res.totalCharge,
                paymentType:res.paymentType,
                accountNo:res.accountNo,
                paymentStatus:res.paymentStatus,
                driverName:res.driverName,
                vehicleName:res.vehicleName
            });
        })
    }

    updateBooking(e){
        e.preventDefault();
        return editSingleBooking(window.location.search.substr(4),this.state).then(res =>{
            console.log(res);
        })
    }

    deleteBooking(e){
        e.preventDefault();
        
        deleteSingleBooking(window.location.search.substr(4)).then(
            res => console.log(res)
        )
    }

    onInputChange(e){
        this.setState({
                [e.target.name]:e.target.value
        });
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
                    <NavLink to="/user/booking">
                        <Button content='Delete' color='purple' icon='trash outline' onClick={this.deleteBooking.bind(this)} floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updateBooking} id="updateBooking">
                    <Form.Group widths='equal'>
                            <Form.Input 
                                label='Customer Name' 
                                placeholder='eg.Vijay' 
                                name='customerName'
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