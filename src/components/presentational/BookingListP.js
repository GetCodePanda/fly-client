import React from 'react';
import { List, Image } from 'semantic-ui-react';

const BookingListP = (props) => {
    const booking = props.booking;
    if(booking.length !== 0){
            const bookingList = booking.map((b)=>{
                return (
                    <List.Item key={b.id}>
                        <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/rachel.png' />
                        <List.Content>
                            <List.Header as='a'>{b.text}</List.Header>
                        </List.Content>
                    </List.Item>
                )
        });
        return (

            <div>
                <List>
                    {bookingList}
                </List>
            </div>
        )
    }

    return (
            <List> 
                <List.Item>
                    <List.Content>
                        <List.Header as='a'>No items Found</List.Header>
                    </List.Content>
                </List.Item> 
            
            </List>
        )
    
}

export default BookingListP;