import React  from 'react';
import Layout from '../../../components/Layout';
import ViewSingleVendorContent from 
'../../../components/vendor/ViewSingleVendorContent';

const ViewSingleVendor = (props) => (
    <Layout>
        <ViewSingleVendorContent id={props.id}/>
    </Layout>
)


export default ViewSingleVendor;