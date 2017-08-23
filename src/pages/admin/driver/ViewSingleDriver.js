import React  from 'react';
import Layout from '../../../components/Layout';
import ViewSingleDriverContent from 
'../../../components/driver/ViewSingleDriverContent';

const ViewSingleDriver = (props) => (
    <Layout>
        <ViewSingleDriverContent id={props.id}/>
    </Layout>
)


export default ViewSingleDriver;