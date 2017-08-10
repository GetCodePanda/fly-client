import React from 'react';
import {Table} from 'semantic-ui-react';

const CustomerTableBody = (props) =>{
    const data = props.data;

    if(data.length !==0){
            const tableRow = data.map((c,i)=>{
                return  (
                    <Table.Row key={i}>
                            <Table.Cell>{c.name}</Table.Cell>
                            <Table.Cell>{c.mobileNumber}</Table.Cell>
                            <Table.Cell>{c.email}</Table.Cell>
                            <Table.Cell>{c.address},{c.city } , {c.state} , {c.country}</Table.Cell>
                            <Table.Cell>{c.status}</Table.Cell>
                    </Table.Row>
                )
            })
            
            return (<span>{tableRow}</span>) 
           
    };
    
    
    return (
        <Table.Row >
            <Table.Cell>
                No Data here ... create new data ...
            </Table.Cell>
        </Table.Row>
    )
};




export default CustomerTableBody;