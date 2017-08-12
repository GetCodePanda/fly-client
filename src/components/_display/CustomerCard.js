import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card , Button} from 'semantic-ui-react';

const CustomerCard = (props) =>{
    const cardData = props.data;
    if(cardData.length !== 0){
        const customerCard = cardData.map((c, i)=>{
            return (
                <Card color='purple' key={i}>
                      <Card.Content>
                        <Card.Header>
                            {c.name}
                        </Card.Header>
                        <Card.Meta>
                            {c.address},{c.city},{c.state},{c.zipCode},{c.country}.
                        </Card.Meta>
                        <hr/>
                        <Card.Description>
                            <div>
                                <strong>Mobile Number:</strong> {c.mobileNumber} 
                            </div>
                            <div>
                                <strong>Email:</strong> {c.email}
                            </div>
                            
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <NavLink to={"/user/customer/view/q?id="+c.id}>
                             <Button icon='archive' color='purple' content='View More' labelPosition='left' />
                            </NavLink>
                            
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return (

            <div>
                {customerCard}
            </div>
        )
    }

    return (
             <Card color='purple'>
                No data
             </Card>
        )
};




export default CustomerCard;