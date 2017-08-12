import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {createNewVehicle} from './../../api/Vehicle';

class CreateVehicle extends  Component{
    constructor(){
        super();
        this.state = {
                name:'',
                type:"",
                model:"",
                regNo:"",
                fuleType:"",
                color:"",
                size:"",
                engineNo:"",
                chasisNo:"",
                batterySNo:"",
                seatCapacity:"",
                rtoTaxFrom:"",
                rtoTaxTo:"",
                insuranceDateFrom:"",
                insuranceDateTo :"",
                fitnessDateFrom:"",
                fitnessDateTo:"",
                authDateFrom:"",
                authDateTo:"",
                permitNo:"",
                fitnessCertificateNo:""
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.createVehicle = this.createVehicle.bind(this)
    }

    onInputChange(e){
        this.setState({
                [e.target.name]:e.target.value
        });
    }

    createVehicle(e){
        e.preventDefault();
        createNewVehicle(this.state).then(res=>{
            alert("user created successfully");
            this.setState({
                name:'',
                type:"",
                model:"",
                regNo:"",
                fuleType:"",
                color:"",
                size:"",
                engineNo:"",
                chasisNo:"",
                batterySNo:"",
                seatCapacity:"",
                rtoTaxFrom:"",
                rtoTaxTo:"",
                insuranceDateFrom:"",
                insuranceDateTo :"",
                fitnessDateFrom:"",
                fitnessDateTo:"",
                authDateFrom:"",
                authDateTo:"",
                permitNo:"",
                fitnessCertificateNo:""
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
                        Create New Car
                    </Header>
                    <NavLink to="/user/vehicle">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>
                <Container>
                    <Form onSubmit={this.createVehicle}>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Name' 
                                placeholder='eg. audi' 
                                required
                                name='name'
                                onChange={this.onInputChange}
                                value={this.state.name}
                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Type' 
                                placeholder='eg. car Type'
                                required
                                name='type'
                                onChange={this.onInputChange}
                                value={this.state.type}
                            />
                            <Form.Input 
                                label='Car Model' 
                                placeholder='eg. car model' 
                                required
                                name='model'
                                onChange={this.onInputChange}
                                value={this.state.model}
                            />
                            
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Register No' 
                                placeholder='eg. 1561165' 
                                required
                                name='regNo'
                                onChange={this.onInputChange}
                                value={this.state.regNo}
                            />
                            <Form.Input 
                                label='Car Fuel Type' 
                                placeholder='eg. petrol'
                                name='fuleType'
                                onChange={this.onInputChange}
                                value={this.state.fuleType}
                            />     
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Color' 
                                placeholder='eg. Indian Red' 
                                required
                                name='color'
                                onChange={this.onInputChange}
                                value={this.state.color}
                            />
                            <Form.Input 
                                label='Car Size' 
                                placeholder='eg. Mini'
                                required
                                name='size'
                                onChange={this.onInputChange}
                                value={this.state.size}
                            /> 
                            <Form.Input 
                                label='Car Engine Number' 
                                placeholder='eg. RT141SD55'
                                name='engineNo'
                                onChange={this.onInputChange}
                                value={this.state.engineNo}
                            />       
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Chasis No' 
                                placeholder='eg. 50ASA5' 
                                name='chasisNo'
                                onChange={this.onInputChange}
                                value={this.state.chasisNo}

                            />
                            <Form.Input 
                                label='Car Battery SNo' 
                                placeholder='eg. AS5611S' 
                                name='batterySNo'
                                onChange={this.onInputChange}
                                value={this.state.batterySNo}

                            />
                            <Form.Input 
                                label='Car Seat Capacity' 
                                placeholder='eg. 05' 
                                name='seatCapacity'
                                onChange={this.onInputChange}
                                value={this.state.seatCapacity}

                            />
                        </Form.Group>
                        
                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Insurance Date From' 
                                placeholder='eg. 2017/4/4' 
                                name='insuranceDateFrom'
                                onChange={this.onInputChange}
                                value={this.state.insuranceDateFrom}
                            />
                            <Form.Input 
                                label='Car Insurance Date From' 
                                placeholder='eg. 2019/4/4' 
                                name='insuranceDateTo'
                                onChange={this.onInputChange}
                                value={this.state.insuranceDateTo}
                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Auth Date From' 
                                placeholder='eg. 2017/4/4' 
                                name='authDateFrom'
                                onChange={this.onInputChange}
                                value={this.state.authDateFrom}
                            />
                            <Form.Input 
                                label='Car Auth Date To' 
                                placeholder='eg. 2019/4/4' 
                                name='authDateTo'
                                onChange={this.onInputChange}
                                value={this.state.authDateTo}
                            />
                        </Form.Group> 

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Permit No' 
                                placeholder='eg. 2017/4/4' 
                                name='permitNo'
                                onChange={this.onInputChange}
                                value={this.state.permitNo}
                            />
                            <Form.Input 
                                label='Car Fitness Certificate No' 
                                placeholder='eg. 2019/4/4' 
                                name='fitnessCertificateNo'
                                onChange={this.onInputChange}
                                value={this.state.fitnessCertificateNo}
                            />
                        </Form.Group> 

                        <Button 
                            color="purple" 
                            content='Create new Car' 
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


export default CreateVehicle;