import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSingleCustomer , editSingleCustomer , deleteSingleCustomer} from './../../api/Customer';


class EditCustomerContent extends  Component{

    constructor(props){
        super(props);
        this.state = {
                name:"",
                mobileNumber:"",
                email:"",
                address:"",
                city:"",
                zipCode:"",
                state:"",
                country:""
        }
        
        this.getOldCustomerData = this.getOldCustomerData.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getOldCustomerData(id){
        return getSingleCustomer(id)
        .then((res)=>{
            console.log(res);
            return this.setState({
                name:res.name,
                mobileNumber:res.mobileNumber,
                email:res.email,
                address:res.address,
                city:res.city,
                zipCode:res.zipCode,
                state:res.state,
                country:res.country
            });
        })
    }
    
    updateCustomer(e){
        e.preventDefault();
        return editSingleCustomer(this.props.id,this.state).then(res =>{
            alert("updated successfully");
            console.log(res);
        })
    }
    
    deleteCustomer(e){
        e.preventDefault();
        deleteSingleCustomer(this.props.id).then(res => {
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
        return this.getOldCustomerData(this.props.id);
    }


    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Edit Customer
                    </Header>
                    <NavLink to="/user/Customer">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/Customer">
                        <Button content='Delete' color='purple' icon='trash outline' onClick={this.deleteCustomer.bind(this)} floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updateCustomer} id="updateCustomer">
                    <Form.Group widths='equal'>
                            <Form.Input 
                                label='Customer Name' 
                                placeholder='eg.Vijay' 
                                name='name'
                                required
                                onChange={this.onInputChange}
                                value={this.state.name}
                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Mobile Number' 
                                placeholder='eg. 9658888883'
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


export default EditCustomerContent;