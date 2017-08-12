import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card , Button} from 'semantic-ui-react';

const PlanCard = (props) =>{
    const cardData = props.data;

    if(cardData.length !== 0){
        const planCard = cardData.map((v, i)=>{
            return (
                <Card color='purple' key={i}>
                      <Card.Content>
                        <Card.Header>
                            {v.planName}
                        </Card.Header>
                        <hr/>
                        <Card.Description>
                            <div>
                                <strong>Plan Km:</strong> {v.planKm} kms
                            </div> 
                            <div>
                                <strong>Plan Charge:</strong>  {v.planCharge} 
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <NavLink to={"/user/plan/view/q?id="+v.id}>
                             <Button icon='archive' color='purple' content='View More' labelPosition='left' />
                            </NavLink>
                            
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return (

            <div>
                {planCard}
            </div>
        )
    }

    return (
             <Card color='purple'>
                No data
             </Card>
        )
};




export default PlanCard;