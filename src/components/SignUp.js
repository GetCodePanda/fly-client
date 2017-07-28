import React ,{Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';



class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { username:'',password:''};
    }
    render(){
        return(
            <Form>
                <Form.Field required>
                    <label>User Name</label>
                    <input placeholder='User Name' />
                </Form.Field>
                <Form.Field required>
                    <label>Email </label>
                    <input placeholder='Email' />
                </Form.Field>
                <Form.Field required>
                    <label>Mobile Number</label>
                    <input placeholder='Mobile Number' />
                </Form.Field>
                <Form.Field required>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Form.Field required>
                    <label>Confirm Password</label>
                    <input placeholder='Confirm Password' />
                </Form.Field>
                <Form.Field required>
                    <Checkbox label='I agree to the Terms and Conditions' defaultChecked/>
                </Form.Field>
                <Button color="teal" type='submit'>Register</Button>
            </Form>
        )
    }
}

export default SignUp;

