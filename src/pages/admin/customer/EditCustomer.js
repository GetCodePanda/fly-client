import React  from 'react';


import Layout from '../../../components/Layout';
import EditCustomerContent from 
'../../../components/customer/EditCustomerContent';


const EditCustomer = (props) => (
    <Layout>
        <EditCustomerContent id={props.id}/>
    </Layout>
)

export default EditCustomer;