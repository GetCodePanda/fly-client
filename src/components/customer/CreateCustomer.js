import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {createNewCustomer} from './../../api/Customer';

class CreateCustomer extends  Component{
    constructor(){
        super();
    
        this.state = {
                name:'',
                mobileNumber:"",
                email:"",
                address:"",
                city:"",
                state:"",
                zipCode:"",
                country:""
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.createCustomer = this.createCustomer.bind(this)
    }

    onInputChange(e){
        this.setState({
                [e.target.name]:e.target.value
        });
    }

    createCustomer(e){
        e.preventDefault();
        createNewCustomer(this.state).then(res=>{
            alert("user created successfully");
            this.setState({
                name:'',
                mobileNumber:"",
                email:"",
                address:"",
                city:"",
                state:"",
                zipCode:"",
                country:""
            })
        });
        console.log(this.state)
    }

    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Create New Customer
                    </Header>
                    <NavLink to="/user/customers">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>
                <Container>
                    <Form onSubmit={this.createCustomer}>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Customer Name' 
                                placeholder='eg. Vijay' 
                                required
                                name='name'
                                onChange={this.onInputChange}
                                value={this.state.name}

                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Mobile Number' 
                                placeholder='eg. 9659855555'
                                required
                                name='mobileNumber'
                                onChange={this.onInputChange}
                                value={this.state.mobileNumber}
                            />
                            <Form.Input 
                                label='Email' 
                                placeholder='eg. example@gmail.com' 
                                required
                                name='email'
                                onChange={this.onInputChange}
                                value={this.state.email}
                            />
                            
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.TextArea 
                                label='Customer Address' 
                                placeholder='eg. No 123 main street' 
                                name='address'
                                onChange={this.onInputChange}
                                value={this.state.address}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='City' 
                                placeholder='eg. Chennai' 
                                name='city'
                                onChange={this.onInputChange}
                                value={this.state.city}
                            />
                            <Form.Input 
                                label='State' 
                                placeholder='eg. Tamil Nadu'
                                name='state'
                                onChange={this.onInputChange}
                                value={this.state.state}
                            /> 
                            <Form.Input 
                                label='Zip Code' 
                                placeholder='eg. 605652'
                                name='zipCode'
                                onChange={this.onInputChange}
                                value={this.state.zipCode}
                            />       
                            <Form.Input 
                                label='Country' 
                                placeholder='eg. India' 
                                name='country'
                                onChange={this.onInputChange}
                                value={this.state.country}

                            />
                        </Form.Group>   
                        
                        <Button 
                            color="purple" 
                            content='Create New Customer' 
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


export default CreateCustomer;