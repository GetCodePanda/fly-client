import React  , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button , Form , Container} from 'semantic-ui-react';

import {getSingleTax , editSingleTax , deleteSingleTax} from './../../api/Tax';


class EditTaxContent extends  Component{

    constructor(props){
        super(props);
        this.state = {
                taxName:"",
                taxValue:""
        }
        
        this.getOldTaxData = this.getOldTaxData.bind(this);
        this.updateTax = this.updateTax.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    getOldTaxData(id){
        return getSingleTax(id)
        .then((res)=>{
            console.log(res);
            return this.setState({
                taxName:res.taxName,
                taxValue:res.taxValue
            });
        })
    }
    
    updateTax(e){
        e.preventDefault();
        return editSingleTax(this.props.id,this.state).then(res =>{
            alert("updated successfully");
            console.log(res);
        })
    }
    
    deleteTax(e){
        e.preventDefault();
        deleteSingleTax(this.props.id).then(res => {
            alert("deleteded successfully");
            console.log(res)
        })
    }
    
    onInputChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    componentDidMount(){
        console.log(this.props.id)
        return this.getOldTaxData(this.props.id);
    }


    render(){
        return(
             <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        Edit Tax
                    </Header>
                    <NavLink to="/user/Tax">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/Tax">
                        <Button content='Delete' color='purple' icon='trash outline' onClick={this.deleteTax.bind(this)} floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>

                <Container>
                    <Form onSubmit={this.updateTax} id="updateTax">
                    <Form.Group widths='equal'>
                            <Form.Input 
                                label='Tax Name' 
                                placeholder='eg. GST' 
                                name='taxName'
                                required
                                onChange={this.onInputChange}
                                value={this.state.taxName}
                            />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input 
                                label='Tax Charge in Percent %' 
                                placeholder='eg. 9658888883'
                                required
                                name='taxValue'
                                onChange={this.onInputChange}
                                value={this.state.taxValue}
                            />
                        </Form.Group>
                    
                        <Button 
                            color="purple" 
                            content='Update' 
                            icon='upload' 
                            labelPosition='left'
                            type='submit'
                        >
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}


export default EditTaxContent;