import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSingleVehicle , editSingleVehicle , deleteSingleVehicle} from './../../api/Vehicle';


class EditVehicleContent extends  Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
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
        
        this.getOldVehicleData = this.getOldVehicleData.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getOldVehicleData(id){
        return getSingleVehicle(id)
        .then((res)=>{
            console.log(res);
            return this.setState({
                name:res.name,
                type:res.type,
                model:res.model,
                regNo:res.regNo,
                fuleType:res.fuleType,
                color:res.color,
                size:res.size,
                engineNo:res.engineNo,
                chasisNo:res.chasisNo,
                batterySNo:res.batterySNo,
                seatCapacity:res.seatCapacity,
                rtoTaxFrom:res.rtoTaxFrom,
                rtoTaxTo:res.rtoTaxTo,
                insuranceDateFrom:res.insuranceDateFrom,
                insuranceDateTo :res.insuranceDateTo ,
                fitnessDateFrom:res.fitnessDateFrom,
                fitnessDateTo:res.fitnessDateTo,
                authDateFrom:res.authDateFrom,
                authDateTo:res.authDateTo,
                permitNo:res.permitNo,
                fitnessCertificateNo:res.fitnessCertificateNo
            });
        })
    }
    
    updateVehicle(e){
        e.preventDefault();
        return editSingleVehicle(this.props.id,this.state).then(res =>{
            alert("updated successfully");
            console.log(res);
        })
    }
    
    deleteVehicle(e){
        e.preventDefault();
        deleteSingleVehicle(this.props.id).then(res => {
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
        return this.getOldVehicleData(this.props.id);
    }


    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Edit Vehicle
                    </Header>
                    <NavLink to="/user/vehicle">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/vehicle">
                        <Button content='Delete' color='purple' icon='trash outline' onClick={this.deleteVehicle.bind(this)} floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updateVehicle} id="updateVehicle">
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

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Car Fitness Date From' 
                                placeholder='eg. 2017/4/4' 
                                name='fitnessDateFrom'
                                onChange={this.onInputChange}
                                value={this.state.fitnessDateFrom}
                            />
                            <Form.Input 
                                label='Car Fitness Date' 
                                placeholder='eg. 2019/4/4' 
                                name='fitnessDate'
                                onChange={this.onInputChange}
                                value={this.state.fitnessDate}
                            />
                            <Form.Input 
                                label='Car RTO Tax From' 
                                placeholder='eg. 2017/4/4' 
                                name='rtoTaxFrom'
                                onChange={this.onInputChange}
                                value={this.state.rtoTaxFrom}
                            />
                            <Form.Input 
                                label='Car RTO Tax To' 
                                placeholder='eg. 2019/4/4' 
                                name='rtoTaxTo'
                                onChange={this.onInputChange}
                                value={this.state.rtoTaxTo}
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


export default EditVehicleContent;