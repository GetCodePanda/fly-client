import React  from 'react';
import Layout from '../../../components/Layout';
import ViewSinglePlanContent from 
'../../../components/plan/ViewSinglePlanContent';

const ViewSinglePlan = (props) => (
    <Layout>
        <ViewSinglePlanContent id={props.id}/>
    </Layout>
)


export default ViewSinglePlan;