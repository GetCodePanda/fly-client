import React from 'react';
import {Table} from 'semantic-ui-react';



const BookingTableHeader = (props) => {
    const header = props.tableHeader;
     console.log(header);
    if(header.length !== 0){
            const bookingHeader = header.map((h , i)=>{
                return (
                     <Table.HeaderCell key={i}>{h}</Table.HeaderCell>

                )
        });
        return (

            <div>
                {bookingHeader}
            </div>
        )
    }

    return (
            <Table.HeaderCell >header</Table.HeaderCell>
        )
    
}

export default BookingTableHeader;