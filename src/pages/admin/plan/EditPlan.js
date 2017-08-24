import React  from 'react';


import Layout from '../../../components/Layout';
import EditPlanContent from 
'../../../components/plan/EditPlanContent';


const EditPlan = (props) => (
    <Layout>
        <EditPlanContent id={props.id}/>
    </Layout>
)

export default EditPlan;