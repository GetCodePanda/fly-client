import React  from 'react';
import {Tab} from 'semantic-ui-react';

import SignUp from './SignUp';
import LogIn from './LogIn';

const panes = [
  {
    menuItem: { key: 'signup', icon: {name:'registered' , size:'big'},  content: 'Sign Up' },
    render: () => <Tab.Pane> <SignUp/></Tab.Pane>,
  },
  {
    menuItem: { key: 'signin', icon: {name:'key' , size:'big'}, content: 'Log In' },
    render: () => <Tab.Pane><LogIn/> </Tab.Pane>,
  },
  
]


const AuthSection = () =>(
      <Tab 
        menu={{ color:'purple',secondary: true, pointing: true }} defaultActiveIndex="0"
        panes={panes}
      />
  )
  


export default AuthSection;