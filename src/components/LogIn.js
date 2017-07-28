import React ,{Component} from 'react';
import {Button, Checkbox, Form} from 'semantic-ui-react';

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = { username:'',password:''};
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
            <Form>
                <Form.Field required>
                    <label>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
                <Form.Field required>
                    <label>Password</label>
                    <input placeholder='*********' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Remember Me' />
                </Form.Field>
                <Button color="teal" type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default LogIn;

