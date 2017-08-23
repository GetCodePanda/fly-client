import React  from 'react';


import Layout from '../../../components/Layout';
import EditBookingContent from 
'../../../components/booking/EditBookingContent';


const EditBooking = (props) => (
    <Layout>
        <EditBookingContent id={props.id}/>
    </Layout>
)

export default EditBooking;