import React ,{Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';
// import SignUpD from '../display/SignUpD';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { username:'',password:''};
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
            <Form>
                <Form.Field>
                    <label>User Name</label>
                    <input placeholder='User Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email </label>
                    <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <label>Mobile Number</label>
                    <input placeholder='Mobile Number' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input placeholder='Confirm Password' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default SignUp;

