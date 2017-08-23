import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button,Table} from 'semantic-ui-react';

import {getSingleTax} from './../../api/Tax';

class ViewSingleTaxContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:'',
                tax:[]
            }
        }
        this.setTaxSingleData = this.setTaxSingleData.bind(this);
    }

   setTaxSingleData(id){
    return getSingleTax(id).
                then((data)=>{
                    
                    const tax = data;
                    return this.setState({
                        data:{
                            id,
                            tax
                        }
                    });
                })
   }

    componentWillMount(){
        this.setTaxSingleData(this.props.id);
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Tax
                    </Header>
                    <NavLink to="/user/tax">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to={`/user/tax/edit/${this.state.data.id}`}>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/tax">
                        <Button content='Delete' color='purple' icon='trash' floated="right" labelPosition='left'/>
                    </NavLink>
                    <br/><br/>
                    <hr/>
                </div>
                <br/>
                <div className="sub-content-wrapper">
                    <Table color="purple" celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Field Name</Table.HeaderCell>
                            <Table.HeaderCell>Field Value</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {console.log(this.state.data.tax)}
                            <Table.Row>
                                <Table.Cell>Tax Name</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.tax.taxName}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Tax Value in Percent %</Table.Cell>
                                <Table.Cell>
                                {this.state.data.tax.taxValue}%
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Tax Status</Table.Cell>
                                <Table.Cell>
                                {this.state.data.tax.status}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}
export default ViewSingleTaxContent;