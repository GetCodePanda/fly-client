import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card , Button} from 'semantic-ui-react';

const TaxCard = (props) =>{
    const cardData = props.data;

    if(cardData.length !== 0){
        const taxCard = cardData.map((t, i)=>{
            return (
                <Card color='purple' key={i}>
                      <Card.Content>
                        <Card.Header>
                      
                               {t.taxName}
                           
                        </Card.Header>
                        <hr/>
                        <Card.Description>
                            
                            <div>
                                <strong>Tax Charge:</strong>  {t.taxValue} 
                            </div>
                            <div>
                                <strong>Tax Charge:</strong>  {t.status} 
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <NavLink to={"/user/Tax/view/q?id="+t.id}>
                             <Button icon='archive' color='purple' content='View More' labelPosition='left' />
                            </NavLink>
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return (

            <div>
                {taxCard}
            </div>
        )
    }

    return (
             <Card color='purple'>
                No data
             </Card>
        )
};




export default TaxCard;