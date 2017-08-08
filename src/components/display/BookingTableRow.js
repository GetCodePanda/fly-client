import React from 'react';
import {Table} from 'semantic-ui-react';



const BookingTableRow = (props) => {
    const row = props.data;
     console.log(row);
    if(row.length !== 0){
            const bookingRow = row.map((d , i)=>{
                return (
                     <Table.Row key={i}>
                        <Table.Cell>{d.bookingID}</Table.Cell>
                        <Table.Cell>{d.pickUpLocation}</Table.Cell>
                        <Table.Cell>{d.dropLocation}</Table.Cell>
                        <Table.Cell>{d.fromDate}</Table.Cell>
                        <Table.Cell>{d.toDate}</Table.Cell>
                        <Table.Cell>{d.bookingStatus}</Table.Cell>
                        <Table.Cell>{d.startingKm}</Table.Cell>
                        <Table.Cell>{d.endingKm}</Table.Cell>
                        <Table.Cell>{d.totalKm}</Table.Cell>
                        <Table.Cell>{d.chargePerKm}</Table.Cell>
                        <Table.Cell>{d.driverCharge}</Table.Cell>
                        <Table.Cell>{d.extraCharge}</Table.Cell>
                        <Table.Cell>{d.extraChargeDesc}</Table.Cell>
                        <Table.Cell>{d.totalCharge}</Table.Cell>
                        <Table.Cell>{d.extraCharge}</Table.Cell>
                        <Table.Cell>{d.paymentType}</Table.Cell>
                        <Table.Cell>{d.accountNo}</Table.Cell>
                        <Table.Cell>{d.paymentStatus}</Table.Cell>
                        <Table.Cell>{d.createdAt}</Table.Cell>
                        <Table.Cell>{d.updatedAt}</Table.Cell>
                        <Table.Cell>{d.driverID}</Table.Cell>

                    </Table.Row>
                )
        });
        return (

            <div>
                {bookingRow}
            </div>
        )
    }

    return (
            <Table.Row>
                No data ..
            </Table.Row>
        )
    
}

export default BookingTableRow;