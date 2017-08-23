import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button,Table} from 'semantic-ui-react';

import {getSingleVendor} from './../../api/Vendor';

class ViewSingleVendorContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:'',
                vendor:[]
            }
        }
        this.setVendorSingleData = this.setVendorSingleData.bind(this);
    }

   setVendorSingleData(id){
    return getSingleVendor(id).
                then((data)=>{
                    
                    const vendor = data;
                    return this.setState({
                        data:{
                            id,
                            vendor
                        }
                    });
                })
   }

    componentWillMount(){
        this.setVendorSingleData(this.props.id);
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Vendor
                    </Header>
                    <NavLink to="/user/vendor">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to={`/user/vendor/edit/${this.state.data.id}`}>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/vendor">
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
                            {console.log(this.state.data.vendor)}
                            <Table.Row>
                                <Table.Cell>Vendor Company Name</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vendor.companyName}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                {console.log(this.state.data)}
                                <Table.Cell>Vendor Mobile Number</Table.Cell>
                                <Table.Cell>
                                {this.state.data.vendor.companyPhoneNo}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Vendor Address</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.vendor.address},{this.state.data.vendor.city}-{this.state.data.vendor.zipCode},{this.state.data.vendor.state}.{this.state.data.vendor.country}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}
export default ViewSingleVendorContent;