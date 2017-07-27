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
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Remember Me' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default LogIn;

