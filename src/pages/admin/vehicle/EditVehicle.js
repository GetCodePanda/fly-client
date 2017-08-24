import React  from 'react';


import Layout from '../../../components/Layout';
import EditVehicleContent from 
'../../../components/vehicle/EditVehicleContent';


const EditVehicle = (props) => (
    <Layout>
        <EditVehicleContent id={props.id}/>
    </Layout>
)

export default EditVehicle;