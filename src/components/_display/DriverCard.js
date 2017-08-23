import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card , Button} from 'semantic-ui-react';

const DriverCard = (props) =>{
    const cardData = props.data;
    if(cardData.length !== 0){
        const driverCard = cardData.map((d, i)=>{
            return (
                <Card color='purple' key={i}>
                      <Card.Content>
                        <Card.Header>
                            {d.name}
                        </Card.Header>
                        <Card.Meta>
                            {d.address},{d.city},{d.state},{d.zipCode},{d.country}.
                        </Card.Meta>
                        <hr/>
                        <Card.Description>
                            <div>
                                <strong>Mobile Number:</strong> {d.mobileNumber} 
                            </div>
                         
                            
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <NavLink to={"/user/driver/view/"+d.id}>
                             <Button icon='archive' color='purple' content='View More' labelPosition='left' />
                            </NavLink>
                            
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return (

            <div>
                {driverCard}
            </div>
        )
    }

    return (
             <Card color='purple'>
                No data
             </Card>
        )
};




export default DriverCard;