import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Card,Header,Button } from 'semantic-ui-react';

import { getVehicle } from './../../api/Vehicle';
import VehicleCard from './../_display/VehicleCard';


class VehicleContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                vehicles:[]
            }
        }
    }

    setVehicleData(){
        return getVehicle({
                     paginate: {
                        default: 2,
                        max: 4
                    }
                })
                .then(res=>{
                    console.log(res.data)
                    return this.setState({
                        data:{
                            vehicles:res.data
                        }
                    }) 
                });
    }

    componentWillMount(){
        return this.setVehicleData();
    }

    render(){
        return(
            <div className="content-wrapper">
                <Header as='h2' dividing>
                     Vehicle
                </Header>

                <div className="sub-content-wrapper">
                 
                    <Button icon='archive' color='purple' content='Delete' labelPosition='left' floated="left"/>
                    <Button icon='download'  color='purple' content='Export' labelPosition='left' floated="left"/>
                    <NavLink to="/user/vehicle/new">
                        <Button content='Create New' color='purple' icon='plus' floated="right" labelPosition='left'/>
                    </NavLink>
                    
                </div>
                <br/><br/><br/><br/>
                    <Card.Group itemsPerRow={2}>
                        <VehicleCard data={this.state.data.vehicles}/>                  
                    </Card.Group>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default VehicleContent;