import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card , Button} from 'semantic-ui-react';

const VehicleCard = (props) =>{
    const cardData = props.data;

    if(cardData.length !== 0){
        const vehicleCard = cardData.map((v, i)=>{
            return (
                <Card color='purple' key={i}>
                      <Card.Content>
                        <Card.Header>
                            {v.name}
                        </Card.Header>
                        <hr/>
                        <Card.Description>
                            <div>
                                <strong>Register Number:</strong> {v.regNo} 
                            </div> 
                            <div>
                                <strong>Car Model:</strong> {v.model} 
                            </div> 
                            <div>
                                <strong>Car Color:</strong> {v.color} 
                            </div>
                            <div>
                                <strong>Car status:</strong> {v.status} 
                            </div> 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <NavLink to={"/user/Vehicle/view/q?id="+v.id}>
                             <Button icon='archive' color='purple' content='View More' labelPosition='left' />
                            </NavLink>
                            
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return (

            <div>
                {vehicleCard}
            </div>
        )
    }

    return (
             <Card color='purple'>
                No data
             </Card>
        )
};




export default VehicleCard;