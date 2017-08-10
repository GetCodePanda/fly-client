import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {createNewTax} from './../../api/Tax';

class CreateTax extends  Component{
    constructor(){
        super();
    
        this.state = {
                taxName:'',
                taxValue:""
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.createTax = this.createTax.bind(this)
    }

    onInputChange(e){
        this.setState({
                [e.target.name]:e.target.value
        });
    }

    createTax(e){
        e.preventDefault();
        createNewTax(this.state).then(res=>{
            alert("user created successfully");
            this.setState({
                taxName:'',
                taxValue:""
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
                        Create New Tax
                    </Header>
                    <NavLink to="/user/booking">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>
                <Container>
                    <Form onSubmit={this.createTax}>
                         <Form.Group widths='equal'>
                            <Form.Input 
                                label='Tax Type Name' 
                                placeholder='eg. GST '
                                required
                                name='taxName'
                                onChange={this.onInputChange}
                                value={this.state.taxName}
                            />
                            
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Tax Charge in %' 
                                placeholder='eg. 10' 
                                required
                                name='taxValue'
                                onChange={this.onInputChange}
                                value={this.state.taxValue}
                            />  
                        </Form.Group>    
                        <Button 
                            color="purple" 
                            content='Create New Tax' 
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


export default CreateTax;