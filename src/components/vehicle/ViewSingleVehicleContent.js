import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button,Table} from 'semantic-ui-react';

import {getSingleVehicle} from './../../api/Vehicle';

class ViewSingleDriverContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:'',
                vehicle:[]
            }
        }
        this.setVehicleSingleData = this.setVehicleSingleData.bind(this);
    }

   setVehicleSingleData(id){
    return getSingleVehicle(id).
                then((data)=>{
                    
                    const vehicle = data;
                    return this.setState({
                        data:{
                            id,
                            vehicle
                        }
                    });
                })
   }

    componentWillMount(){
        this.setVehicleSingleData(this.props.id);
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Vehicle
                    </Header>
                    <NavLink to="/user/vehicle">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to={`/user/vehicle/edit/${this.state.data.id}`}>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/vehicle">
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
                                {console.log(this.state.data)}
                                <Table.Cell>Car Name</Table.Cell>
                                <Table.Cell>{this.state.data.vehicle.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                {console.log(this.state.data)}
                                <Table.Cell>Car Type</Table.Cell>
                                <Table.Cell>{this.state.data.vehicle.type}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Size</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.size}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Color</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.color}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Model</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.model}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Seat Capacity</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.seatCapacity}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Fuel Type</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.fuelType}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Engine No</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.engineNo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Battery No</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.batteryNo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Chasis No</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.chasisNo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Register No</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.regNo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Car Permit No</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.permitNo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Auth Date From</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.authDateFrom}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Auth Date To</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.authDateTo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Fitness Certificate No</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.
fitnessCertificateNo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Fintness Date From</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.fitnessDateFrom}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Fintness Date To</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.fitnessDateTo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Insurance Date From</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.insuranceDateFrom}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Insurance Date To</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.insuranceDateTo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>RTO Tax From</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.rtoTaxFrom}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>RTO Tax To</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.rtoTaxTo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Vehicle Status</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vehicle.status}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}
export default ViewSingleDriverContent;