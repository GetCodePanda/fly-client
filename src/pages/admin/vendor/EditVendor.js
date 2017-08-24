import React  from 'react';

import Layout from '../../../components/Layout';
import EditVendorContent from 
'../../../components/vendor/EditVendorContent';

const EditVendor = (props) => (
    <Layout>
        <EditVendorContent id={props.id}/>
    </Layout>
)
export default EditVendor;