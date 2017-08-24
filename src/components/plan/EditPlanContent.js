import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSinglePlan , editSinglePlan , deleteSinglePlan} from './../../api/Plan';


class EditPlanContent extends  Component{

    constructor(props){
        super(props);
        this.state = {
                planName:"",
                planCharge:"",
                planKm:""
        }
        
        this.getOldPlanData = this.getOldPlanData.bind(this);
        this.updatePlan = this.updatePlan.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getOldPlanData(id){
        return getSinglePlan(id)
        .then((res)=>{
            console.log(res);
            return this.setState({
                        planName:res.planName,
                        planCharge:res.planCharge,
                        planKm:res.planKm
                    });
        })
    }
    
    updatePlan(e){
        e.preventDefault();
        return editSinglePlan(this.props.id,this.state).then(res =>{
            alert("updated successfully");
            console.log(res);
        })
    }
    
    deletePlan(e){
        e.preventDefault();
        deleteSinglePlan(this.props.id).then(res => {
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
        return this.getOldPlanData(this.props.id);
    }


    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Edit Plan
                    </Header>
                    <NavLink to="/user/Plan">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/Plan">
                        <Button content='Delete' color='purple' icon='trash outline' onClick={this.deletePlan.bind(this)} floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updatePlan} id="updatePlan">
                    <Form.Group widths='equal'>
                            <Form.Input 
                                label='Plan Name' 
                                placeholder='eg.Vijay' 
                                name='planName'
                                required
                                onChange={this.onInputChange}
                                value={this.state.planName}
                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Plan Charge' 
                                placeholder='eg. 10'
                                required
                                name='planCharge'
                                onChange={this.onInputChange}
                                value={this.state.planCharge}
                            />
                            <Form.Input 
                                label='Plan Kms' 
                                placeholder='eg. 10' 
                                required
                                name='planKm'
                                onChange={this.onInputChange}
                                value={this.state.planKm}
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


export default EditPlanContent;