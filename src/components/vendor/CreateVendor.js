import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {createNewVendor} from './../../api/Vendor';

class CreateVendor extends  Component{
    constructor(){
        super();
    
        this.state = {
                companyName:'',
                companyPhoneNo:"",
                address:"",
                city:"",
                state:"",
                zipCode:"",
                country:""
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.createVendor = this.createVendor.bind(this)
    }

    onInputChange(e){
        this.setState({
                [e.target.name]:e.target.value
        });
    }

    createVendor(e){
        e.preventDefault();
        createNewVendor(this.state).then(res=>{
            alert("user created successfully");
            this.setState({
                companyName:'',
                companyPhoneNo:"",
                address:"",
                city:"",
                state:"",
                zipCode:"",
                country:""
            });
            console.log(res);
        });
        console.log(this.state)
    }

    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Create New Vendor
                    </Header>
                    <NavLink to="/user/vendor">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>
                <Container>
                    <Form onSubmit={this.createVendor}>
                    
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Vendor Company Name' 
                                placeholder='eg. Vijay Travels' 
                                required
                                name='companyName'
                                onChange={this.onInputChange}
                                value={this.state.companyName}

                            />
                            <Form.Input 
                                label='Vendor Company Phone Number' 
                                placeholder='eg. 9659855555'
                                required
                                name='companyPhoneNo'
                                onChange={this.onInputChange}
                                value={this.state.companyPhoneNo}
                            />
                            
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.TextArea 
                                label='Vendor Address' 
                                placeholder='eg. No 123 main street' 
                                name='address'
                                required
                                onChange={this.onInputChange}
                                value={this.state.address}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='City' 
                                placeholder='eg. Chennai' 
                                name='city'
                                required
                                onChange={this.onInputChange}
                                value={this.state.city}
                            />
                            <Form.Input 
                                label='State' 
                                placeholder='eg. Tamil Nadu'
                                name='state'
                                required
                                onChange={this.onInputChange}
                                value={this.state.state}
                            /> 
                            <Form.Input 
                                label='Zip Code' 
                                placeholder='eg. 605652'
                                name='zipCode'
                                required
                                onChange={this.onInputChange}
                                value={this.state.zipCode}
                            />       
                            <Form.Input 
                                label='Country' 
                                placeholder='eg. India' 
                                name='country'
                                required
                                onChange={this.onInputChange}
                                value={this.state.country}

                            />
                        </Form.Group> 
                        <Button 
                            color="purple" 
                            content='Create New Vendor' 
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


export default CreateVendor;