import React from 'react';
import {NavLink} from 'react-router-dom';
import {Card,Button} from 'semantic-ui-react';



const BookingCard = (props) => {
    const cardData = props.data;
    if(cardData.length !== 0){
        const bookingCard = cardData.map((d , i)=>{
            return (
                <Card color='purple' key={i}>
                      <Card.Content>
                        <Card.Header>
                            Customer Name
                        </Card.Header>
                        <Card.Meta>
                            {d.bookingID}
                        </Card.Meta>
                        <Card.Description>
                            <div>
                                <strong>Pick Up Location:</strong> {d.pickUpLocation} 
                            </div>
                            <div>
                                <strong>Drop Location:</strong> {d.dropLocation}
                            </div>
                            <div>
                                <strong>From Date:</strong> {d.fromDate}
                            </div>
                            <div>
                                <strong>To Date:</strong> {d.toDate}
                            </div>
                            <div>
                                <strong>Booking Status:</strong> {d.bookingStatus}
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <NavLink to={"/user/booking/view/q?id="+d.bookingID}>
                             <Button icon='archive' color='purple' content='View More' labelPosition='left' />
                            </NavLink>
                            
                        </div>
                    </Card.Content>
                </Card>
            )
        });
        return (

            <div>
                {bookingCard}
            </div>
        )
    }

    return (
             <Card color='purple'>
                No data
             </Card>
        )
    
}

export default BookingCard;