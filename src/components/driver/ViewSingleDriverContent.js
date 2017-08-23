import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button,Table} from 'semantic-ui-react';

import {getSingleDriver} from './../../api/Driver';

class ViewSingleDriverContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:'',
                driver:[]
            }
        }
        this.setDriverSingleData = this.setDriverSingleData.bind(this);
    }

   setDriverSingleData(id){

    return getSingleDriver(id).
                then((data)=>{
                    
                    const driver = data;
                    return this.setState({
                        data:{
                            id,
                            driver
                        }
                    });
                })
   }

    componentWillMount(){
        this.setDriverSingleData(this.props.id);
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Driver
                    </Header>
                    <NavLink to="/user/driver">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to={`/user/driver/edit/${this.state.data.id}`}>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/driver">
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
                                <Table.Cell>Driver Name</Table.Cell>
                                <Table.Cell>{this.state.data.driver.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                {console.log(this.state.data)}
                                <Table.Cell>Driver Mobile Number</Table.Cell>
                                <Table.Cell>{this.state.data.driver.mobileNumber}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Driver Address</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.driver.address},{this.state.data.driver.city}-{this.state.data.driver.zipCode},{this.state.data.driver.state}.{this.state.data.driver.country}.
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