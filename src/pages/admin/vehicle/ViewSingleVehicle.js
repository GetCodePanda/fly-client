import React  from 'react';
import Layout from '../../../components/Layout';
import ViewSingleVehicleContent from 
'../../../components/vehicle/ViewSingleVehicleContent';

const ViewSingleVehicle = (props) => (
    <Layout>
        <ViewSingleVehicleContent id={props.id}/>
    </Layout>
)


export default ViewSingleVehicle;