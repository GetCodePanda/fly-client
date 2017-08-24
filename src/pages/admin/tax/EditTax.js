import React  from 'react';


import Layout from '../../../components/Layout';
import EditTaxContent from 
'../../../components/tax/EditTaxContent';


const EditTax = (props) => (
    <Layout>
        <EditTaxContent id={props.id}/>
    </Layout>
)

export default EditTax;