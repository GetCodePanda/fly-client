import React  from 'react';


import Layout from '../../../components/Layout';
import EditDriverContent from 
'../../../components/driver/EditDriverContent';


const EditDriver = (props) => (
    <Layout>
        <EditDriverContent id={props.id}/>
    </Layout>
)

export default EditDriver;