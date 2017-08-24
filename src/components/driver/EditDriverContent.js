import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSingleDriver , editSingleDriver , deleteSingleDriver} from './../../api/Driver';


class EditDriverContent extends  Component{

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
        
        this.getOldDriverData = this.getOldDriverData.bind(this);
        this.updateDriver = this.updateDriver.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getOldDriverData(id){
        return getSingleDriver(id)
        .then((res)=>{
            console.log(res);
            return this.setState({
                name:res.name,
                mobileNumber:res.mobileNumber,
                address:res.address,
                city:res.city,
                zipCode:res.zipCode,
                state:res.state,
                country:res.country
            });
        })
    }
    
    updateDriver(e){
        e.preventDefault();
        return editSingleDriver(this.props.id,this.state).then(res =>{
            alert("updated successfully");
            console.log(res);
        })
    }
    
    deleteDriver(e){
        e.preventDefault();
        deleteSingleDriver(this.props.id).then(res => {
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
        return this.getOldDriverData(this.props.id);
    }


    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Edit Driver
                    </Header>
                    <NavLink to="/user/driver">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/driver">
                        <Button content='Delete' color='purple' icon='trash outline' onClick={this.deleteDriver.bind(this)} floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updateDriver} id="updateDriver">
                    <Form.Group widths='equal'>
                            <Form.Input 
                                label='Driver Name' 
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
                                label='Address' 
                                placeholder='eg. No 123 Main Street' 
                                required
                                name='address'
                                onChange={this.onInputChange}
                                value={this.state.address}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            
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


export default EditDriverContent;