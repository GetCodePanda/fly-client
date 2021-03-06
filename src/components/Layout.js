import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Container, Icon } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';


import TopNav from './TopNav';

class Layout extends Component {
  state = { visible: true }
  render() {
    const { visible } = this.state
    return (
      <div>
        
        <Sidebar.Pushable as={Segment} className="layout">
          <Sidebar  color="purple" as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <NavLink to="/user/dashboard">
              <Menu.Item name='rocket' className="logo">
                <Icon name='rocket' />
                <strong>Fly Tourister</strong>
              </Menu.Item>
            </NavLink>

            <NavLink to="/user/dashboard">
              <Menu.Item name='dashboard'>
                  <Icon name='dashboard' /> 
                  Dashboard
              </Menu.Item>
            </NavLink>
            <NavLink to="/user/booking">
              <Menu.Item name='book'>
                <Icon name='book' />
                Booking
              </Menu.Item>
            </NavLink>
            <NavLink to="/user/driver">
              <Menu.Item name='user circle outline'>
                  <Icon name='user circle outline' />
                  Driver
              </Menu.Item>
            </NavLink>
            <NavLink to="/user/customers">
              <Menu.Item name='users'>
                <Icon name='users' />
                Customers
              </Menu.Item>
            </NavLink>
            <NavLink to="/user/vehicle">
              <Menu.Item name='shipping'>
                <Icon name='shipping' />
                Vehicles
              </Menu.Item>
            </NavLink>
            <NavLink to="/user/vendor">
              <Menu.Item name='spy'>
                <Icon name='spy' />
                Vendor
              </Menu.Item>
            </NavLink>
           <NavLink to="/user/plan">
              <Menu.Item name='newspaper'>
                <Icon name='newspaper' />
                 Plan
              </Menu.Item>
           </NavLink>
           <NavLink to="/user/tax">
              <Menu.Item name='newspaper'>
                <Icon name='calculator' />
                 Tax
              </Menu.Item>
           </NavLink>
            <NavLink to="/user/report">
              <Menu.Item name='pie chart'>
                <Icon name='pie chart' />
                Reports
              </Menu.Item>
            </NavLink>
          </Sidebar >
          <Sidebar.Pusher>
            <Segment basic>
                <Container fluid>
                  
                  <section className="admin-panel-content">
                    <TopNav/>
                    {this.props.children}
                  </section>
                </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Layout;