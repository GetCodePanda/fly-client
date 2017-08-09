import React ,{Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';

import flyClientApp from '../api/index';
import {loginUser} from '../api/User';

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {email:'',password:'',};
        this.authUser = this.authUser.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    authUser(e){
        loginUser(this.state.email, this.state.password)
        .then(response => {
            return flyClientApp.passport.verifyJWT(response.accessToken);
        })
        .then(payload => {
            return flyClientApp.service('users').get(payload.userId);
        })
        .then(user => {
           localStorage.setItem('userID', user.id)
           window.location.assign('/user/booking')
        })
        .catch(function(error){
            console.error('Error authenticating!', error);
        });

        e.preventDefault();
    }

    onInputChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){
        return(
            <Form onSubmit={this.authUser}>
                <Form.Field required>
                    <label>Email</label>
                    <input 
                        name="email"
                        placeholder='Email'
                        onChange={this.onInputChange}
                        value={this.state.email}
                    />
                </Form.Field>
                <Form.Field required>
                    <label>Password</label>
                    <input 
                        name='password'
                        placeholder='*********' 
                        onChange={this.onInputChange}
                        value={this.state.password}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Remember Me' />
                </Form.Field>
                <Button color="purple" type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default LogIn;

