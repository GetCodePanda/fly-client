import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button , Table} from 'semantic-ui-react';

import {getSingleBooking} from './../../api/Booking';

class ViewSingleBookingContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:'',
                singleBooking:[]
            }
        }


        this.setBookingSingleData = this.setBookingSingleData.bind(this);
        
    }

   setBookingSingleData(){

    return getSingleBooking(this.state.data.id).
                then((data)=>{
                    const singleData = data;
                    return this.setState({
                        data:{
                            id:window.location.search.substr(4),
                            singleBooking:singleData
                        }
                    });
                })    
          
   }


    componentWillMount(){
        this.setBookingSingleData();
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Booking
                    </Header>
                    <NavLink to="/user/booking">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to={`/user/booking/edit/q?id=${this.state.data.id}`}>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/booking">
                        <Button content='Delete' color='purple' icon='trash' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <div className="sub-content-wrapper">
                    <Table color="purple" celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Field Name</Table.HeaderCell>
                            <Table.HeaderCell>Field Value</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Customer Name</Table.Cell>
                                <Table.Cell>Vijay</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                {console.log(this.state.data.singleBooking)}
                                <Table.Cell>Pick Up Location</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.pickUpLocation}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Drop Location</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.dropLocation}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>From Date</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.fromDate}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>To Date</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.toDate}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Starting Km</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.startingKm}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Ending Km</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.endingKm}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Total Km</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.totalKm}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Booking Plan</Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Drvier Charge</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.driverCharge}</Table.Cell>
                            </Table.Row>
                             <Table.Row>
                                <Table.Cell>Extra Charge</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.extraCharge}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Extra Charge Description</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.extraChargeDesc}</Table.Cell>
                            </Table.Row>
                             <Table.Row>
                                <Table.Cell>Total Charge</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.totalCharge}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Payment Type</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.paymentType}</Table.Cell>
                            </Table.Row>
                             <Table.Row>
                                <Table.Cell>Driver Name</Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                             <Table.Row>
                                <Table.Cell>Vendor Name</Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                             <Table.Row>
                                <Table.Cell>Vehicle Name</Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Payment Status</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.paymentStatus}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Booking Status</Table.Cell>
                                <Table.Cell>{this.state.data.singleBooking.bookingStatus}</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ViewSingleBookingContent;