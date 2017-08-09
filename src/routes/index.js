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
import CreateNewBooking from '../pages/admin/booking/CreateNewBooking';
import ViewSingleBooking from '../pages/admin/booking/ViewSingleBooking';



import Employee from '../pages/admin/Employee'
import Driver from '../pages/admin/Driver'
import Plan from '../pages/admin/Plan'
import Customers from '../pages/admin/Customers'
import Vehicle from '../pages/admin/Vehicle'
import Vendor from '../pages/admin/Vendor'
import Report from '../pages/admin/Report'
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
            <Route exact path="/user/employee" component={Employee} />
            <Route exact path="/user/customers" component={Customers} />
            <Route exact path="/user/taxAndPlan" component={Plan} />
            <Route exact path="/user/vehicle" component={Vehicle} />
            <Route exact path="/user/vendor" component={Vendor} />
            <Route exact path="/user/report" component={Report} />
        </div>
    </Router>
)

export default FlyRouter;