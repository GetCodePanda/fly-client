import React from 'react'
import { Image, List } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

import flyClientApp from '../api/index';


const logout = ()=>{
  localStorage.removeItem('userID')
  flyClientApp.logout()
}

const TopNav = () => (
  <div className="top-nav">
      <List horizontal relaxed='very'  className='fly-topnav' floated='right'>
        <List.Item>
          <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
          <List.Content>
            <List.Header className='username-topnav' >Admin</List.Header>
            
          </List.Content>
        </List.Item>
        <List.Item>
         <List.Icon name='alarm outline' size='large' />
          <List.Content>Notification</List.Content>
        </List.Item>
        <List.Item>
          <NavLink to="/" onClick={logout}>
            <List.Icon name='sign out' size='large'/>
            <List.Content className='top-nav-logout'>Logout</List.Content>
          </NavLink>
        </List.Item>
      </List>
  </div>
)

export default TopNav