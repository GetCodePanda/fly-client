import React  from 'react';


import Layout from '../../../components/Layout';
import ViewSingleCustomerContent from 
'../../../components/customer/ViewSingleCustomerContent';

const ViewSingleCustomer = (props) => (
    <Layout>
        <ViewSingleCustomerContent id={props.id}/>
    </Layout>
)




export default ViewSingleCustomer;