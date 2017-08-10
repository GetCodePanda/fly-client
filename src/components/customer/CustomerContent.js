import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Table , Header, Button} from 'semantic-ui-react';


import {getCustomer} from './../../api/Customer';

import CustomerTableBody from './../_display/CustomerTableBody';


class CustomerContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                customers:[]
            }
        }
    }

    setCustomerData(){
        return getCustomer({
                     paginate: {
                        default: 2,
                        max: 4
                    }
                })
                .then(res=>{
                    console.log(res.data)
                    return this.setState({
                        data:{
                            customers:res.data
                        }
                    }) 
                });
    }

    componentWillMount(){
        return this.setCustomerData();
    }

    render(){
        return(
            <div className="content-wrapper">
                <Header as='h2' dividing>
                     Customer
                </Header>

                <div className="sub-content-wrapper">
                    <Button icon='archive' color='purple' content='Delete' labelPosition='left' floated="left"/>
                    <Button icon='download'  color='purple' content='Export' labelPosition='left' floated="left"/>
                    <NavLink to="/user/customer/new">
                        <Button content='Create New' color='purple' icon='plus' floated="right" labelPosition='left'/>
                    </NavLink>
                </div>

                <br/><br/><br/><br/>
                <Table color="purple" size='large' unstackable celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Mobile Number</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <CustomerTableBody data={this.state.data.customers}/>                  
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CustomerContent;