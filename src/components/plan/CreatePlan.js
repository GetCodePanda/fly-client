import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {createNewPlan} from './../../api/Plan';

class CreatePlan extends  Component{
    constructor(){
        super();
        this.state = {
                planName:'',
                planKm:"",
                planCharge:""
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.createPlan = this.createPlan.bind(this)
    }

    onInputChange(e){
        this.setState({
                [e.target.name]:e.target.value
        });
    }

    createPlan(e){
        e.preventDefault();
        createNewPlan(this.state).then(res=>{
            alert("user created successfully");
            this.setState({
                planName:'',
                planKm:"",
                planCharge:""
            })
            console.log(res);
        });
        console.log(this.state)
    }

    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Create New Plan
                    </Header>
                    <NavLink to="/user/plan">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>
                <Container>
                    <Form onSubmit={this.createPlan}>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Plan Name' 
                                placeholder='eg. Plan 1'
                                required
                                name='planName'
                                onChange={this.onInputChange}
                                value={this.state.planName}
                            />
                            
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Plan Kms' 
                                placeholder='eg. 100kms' 
                                required
                                name='planKm'
                                onChange={this.onInputChange}
                                value={this.state.planKm}
                            />  
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Plan Charge' 
                                placeholder='eg. 2000' 
                                required
                                name='planCharge'
                                onChange={this.onInputChange}
                                value={this.state.planCharge}
                            />  
                        </Form.Group>
                    
                        
                        <Button 
                            color="purple" 
                            content='Create New Plan' 
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


export default CreatePlan;