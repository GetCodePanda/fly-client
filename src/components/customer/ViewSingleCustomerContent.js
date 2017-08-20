import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button , Table} from 'semantic-ui-react';

import {getSingleCustomer} from './../../api/Customer';

class ViewSingleCustomerContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:window.location.search.substr(4),
                singleCustomer:[]
            }
        }
        

        this.setCustomerSingleData = this.setCustomerSingleData.bind(this);
        
    }

   setCustomerSingleData(){


    return getSingleCustomer(this.state.data.id).
                then((data)=>{
                    const singleData = data;
                    return this.setState({
                        data:{
                            singleCustomer:singleData
                        }
                    });
                })    
          
   }


    componentWillMount(){
        this.setCustomerSingleData();
    }

    render(){

        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Customer
                    </Header>
                    <NavLink to="/user/customer">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
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
                                <Table.Cell>{this.state.data.singleCustomer.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                {console.log(this.state.data.singleCustomer)}
                                <Table.Cell>Customer Address</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.singleCustomer.address},{this.state.data.singleCustomer.city},{this.state.data.singleCustomer.zipCode},{this.state.data.singleCustomer.state},
                                    {this.state.data.singleCustomer.country}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Customer Mobile Number</Table.Cell>
                                <Table.Cell>{this.state.data.singleCustomer.mobileNumber}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Customer Email</Table.Cell>
                                <Table.Cell>{this.state.data.singleCustomer.email}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Customer Status</Table.Cell>
                                <Table.Cell>{this.state.data.singleCustomer.status}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ViewSingleCustomerContent;