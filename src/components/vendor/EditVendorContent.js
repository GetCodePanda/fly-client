import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSingleVendor , editSingleVendor , deleteSingleVendor} from './../../api/Vendor';


class EditVendorContent extends  Component{

    constructor(props){
        super(props);
        this.state = {
                companyName:"",
                companyPhoneNo:"",
                address:"",
                city:"",
                zipCode:"",
                state:"",
                country:""
        }
        
        this.getOldVendorData = this.getOldVendorData.bind(this);
        this.updateVendor = this.updateVendor.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getOldVendorData(id){
        return getSingleVendor(id)
        .then((res)=>{
            console.log(res);
            return this.setState({
                companyName:res.companyName,
                companyPhoneNo:res.companyPhoneNo,
                address:res.address,
                city:res.city,
                zipCode:res.zipCode,
                state:res.state,
                country:res.country
            });
        })
    }
    
    updateVendor(e){
        e.preventDefault();
        return editSingleVendor(this.props.id,this.state).then(res =>{
            alert("updated successfully");
            console.log(res);
        })
    }
    
    deleteVendor(e){
        e.preventDefault();
        deleteSingleVendor(this.props.id).then(res => {
            alert("deleteded successfully");
            console.log(res)
        })
    }
    
    onInputChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    componentDidMount(){
        console.log(this.props.id)
        return this.getOldVendorData(this.props.id);
    }


    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Edit Vendor
                    </Header>
                    <NavLink to="/user/vendor">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/vendor">
                        <Button content='Delete' color='purple' icon='trash outline' onClick={this.deleteVendor.bind(this)} floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updateVendor} id="updateVendor">
                    <Form.Group widths='equal'>
                            <Form.Input 
                                label='Vendor Company Name' 
                                placeholder='eg.Vijay' 
                                name='companyName'
                                required
                                onChange={this.onInputChange}
                                value={this.state.companyName}
                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Mobile Number' 
                                placeholder='eg. 9658888883'
                                required
                                name='companyPhoneNo'
                                onChange={this.onInputChange}
                                value={this.state.companyPhoneNo}
                            />
                            
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Address' 
                                placeholder='eg. No 123 Main Street' 
                                required
                                name='address'
                                onChange={this.onInputChange}
                                value={this.state.address}
                            />
                            <Form.Input 
                                label='City' 
                                placeholder='eg. No 123 Main Street' 
                                required
                                name='city'
                                onChange={this.onInputChange}
                                value={this.state.city}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Zip Code' 
                                placeholder='eg. No 123 Main Street' 
                                required
                                name='zipCode'
                                onChange={this.onInputChange}
                                value={this.state.zipCode}
                            />
                            <Form.Input 
                                label='State' 
                                placeholder='eg. No 123 Main Street' 
                                required
                                name='state'
                                onChange={this.onInputChange}
                                value={this.state.state}
                            />
                            <Form.Input 
                                label='Country' 
                                placeholder='eg. No 123 Main Street' 
                                required
                                name='country'
                                onChange={this.onInputChange}
                                value={this.state.country}
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


export default EditVendorContent;