import React  from 'react';
import Layout from '../../../components/Layout';
import ViewSingleTaxContent from 
'../../../components/tax/ViewSingleTaxContent';

const ViewSingleTax = (props) => (
    <Layout>
        <ViewSingleTaxContent id={props.id}/>
    </Layout>
)


export default ViewSingleTax;