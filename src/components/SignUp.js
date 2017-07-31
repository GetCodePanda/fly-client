import React ,{Component} from 'react';
import {Button, Checkbox, Form , Message } from 'semantic-ui-react';

import {createNewUser} from '../api/User';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { 
            username:'',
            email:'',
            mobileNumber:'',
            password:'',
            confirmPassword:'',
            trems:'YES',
            isChecked:true,
            hasError:false,
            errors:''
        };
        this.createUser = this.createUser.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    createUser(e){
        e.preventDefault();
        createNewUser(this.state)
            .then(res => {
                const parent = this._reactInternalInstance._currentElement._owner._instance;
                parent.setState({
                   activeIndex:"1"
               })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    hasError:true,
                    errors:err
                })
            });
    }

    onUserChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    

    render(){
            const hasError = this.state.hasError;
            let message='';
            if(hasError){
                message = <Message
                            error
                            header="Please provide correct info"
                        />
            }
        return(
            <section>
                {message}
                <Form onSubmit={this.createUser}>
                    <Form.Field required>
                        <label>User Name</label>
                        <input  
                            name='username' 
                            placeholder='User Name' 
                            onChange={this.onUserChange}
                            value={this.state.username}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>Email </label>
                        <input 
                            name='email' 
                            placeholder='Email' 
                            onChange={this.onUserChange}
                            value={this.state.email}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>Mobile Number</label>
                        <input 
                            name='mobileNumber'
                            placeholder='Mobile Number' 
                            onChange={this.onUserChange}
                            value={this.state.mobileNumber}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <input 
                            name='password'
                            placeholder='Password' 
                            onChange={this.onUserChange}
                            value={this.state.password}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>Confirm Password</label>
                        <input 
                            name='confirmPassword' 
                            placeholder='Confirm Password' 
                            onChange={this.onUserChange}
                            value={this.state.confirmPassword}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <Checkbox 
                            name='terms' 
                            label='I agree to the Terms and Conditions' onChange={(e)=>{
                                this.setState({
                                    isChecked:!this.state.isChecked
                                });
                                if(this.state.isChecked === false ){
                                    return this.setState({
                                        trems:"NO"
                                    });
                                }
    
                                return this.setState({
                                        trems:"NO"
                                });
                            }} 
                            checked={this.state.isChecked}
                        />
                    </Form.Field>
                    <Button color="purple" type='submit'>Register</Button>
                </Form>
            </section>
        )
    }
}

export default SignUp;

