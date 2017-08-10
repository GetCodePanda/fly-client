import React from 'react';
import {
    BrowserRouter as Router,
    Route
    // Link,
    // Redirect,
    // withRouter
} from 'react-router-dom';

import Home from '../pages/Home'

import Booking from '../pages/admin/booking/Booking'
import CreateNewBooking from 
'../pages/admin/booking/CreateNewBooking';
import ViewSingleBooking from 
'../pages/admin/booking/ViewSingleBooking';


import Customers from '../pages/admin/customer/Customers'
import CreateNewCustomer from 
'../pages/admin/customer/CreateNewCustomer';

import Driver from '../pages/admin/driver/Driver'
import CreateNewDriver from '../pages/admin/driver/CreateNewDriver'

import Vehicle from '../pages/admin/vehicle/Vehicle'
import CreateNewVehicle from '../pages/admin/vehicle/CreateNewVehicle'

import Vendor from '../pages/admin/vendor/Vendor'
import CreateNewVendor from '../pages/admin/vendor/CreateNewVendor'

import Plan from '../pages/admin/plan/Plan'
import CreateNewPlan from '../pages/admin/plan/CreateNewPlan'


import Tax from '../pages/admin/tax/Tax'
import CreateNewTax from '../pages/admin/tax/CreateNewTax'

import Report from '../pages/admin/Report'
import Employee from '../pages/admin/Employee'
import Dashboard from '../pages/admin/Dashboard'




const FlyRouter = ()=>(
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/user/dashboard" component={Dashboard} />

            <Route exact path="/user/booking" component={Booking} />
            <Route exact path="/user/booking/new" component={CreateNewBooking} />
            <Route exact path="/user/booking/view/:id" component={ViewSingleBooking} />
           
            <Route exact path="/user/driver" component={Driver} />
            <Route exact path="/user/driver/new" component={CreateNewDriver} />
            
            <Route exact path="/user/customers" component={Customers} />
            <Route exact path="/user/customer/new" component={CreateNewCustomer} />

            <Route exact path="/user/plan" component={Plan} />
            <Route exact path="/user/plan/new" component={CreateNewPlan} />

             <Route exact path="/user/tax" component={Tax} />
            <Route exact path="/user/tax/new" component={CreateNewTax} />

            <Route exact path="/user/vehicle" component={Vehicle} />
            <Route exact path="/user/vehicle/new" component={CreateNewVehicle} />
            
            
            <Route exact path="/user/vendor" component={Vendor} />
            <Route exact path="/user/vendor/new" component={CreateNewVendor} />


            <Route exact path="/user/employee" component={Employee} />
            <Route exact path="/user/report" component={Report} />
        </div>
    </Router>
)

export default FlyRouter;