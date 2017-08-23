import React  from 'react';


import Layout from '../../../components/Layout';
import ViewSingleBookingContent from 
'../../../components/booking/ViewSingleBookingContent';

const ViewSingleBooking = (props) => (
    <Layout>
        <ViewSingleBookingContent id={props.id}/>
    </Layout>
)




export default ViewSingleBooking;