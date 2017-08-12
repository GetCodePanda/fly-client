import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card , Button} from 'semantic-ui-react';

const VendorCard = (props) =>{
    const cardData = props.data;

    if(cardData.length !== 0){
        const vendorCard = cardData.map((v, i)=>{
            return (
                <Card color='purple' key={i}>
                      <Card.Content>
                        <Card.Header>
                            {v.companyName}
                        </Card.Header>
                        <hr/>
                        <Card.Description>
                            <div>
                                <strong>Company Phone Number:</strong>{v.companyPhoneNo} 
                            </div> 
                            <div>
                                <strong>Company Address:</strong>{v.address},{v.city},{v.zipCode},{v.state},{v.country}
                            </div> 
                            <div>
                                <strong>Company status:</strong>{v.vendorStatus} 
                            </div> 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <NavLink to={"/user/vendor/view/q?id="+v.id}>
                             <Button icon='archive' color='purple' content='View More' labelPosition='left' />
                            </NavLink>
                            
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return (

            <div>
                {vendorCard}
            </div>
        )
    }

    return (
             <Card color='purple'>
                No data
             </Card>
        )
};




export default VendorCard;