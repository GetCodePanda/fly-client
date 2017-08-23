import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header,Button,Table} from 'semantic-ui-react';

import {getSinglePlan} from './../../api/Plan';

class ViewSinglePlanContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                id:'',
                plan:[]
            }
        }
        this.setPlanSingleData = this.setPlanSingleData.bind(this);
    }

   setPlanSingleData(id){
    return getSinglePlan(id).
                then((data)=>{
                    
                    const plan = data;
                    return this.setState({
                        data:{
                            id,
                            plan
                        }
                    });
                })
   }

    componentWillMount(){
        this.setPlanSingleData(this.props.id);
    }

    render(){
        return(
            <div className="content-wrapper">
                <div className="content-header">
                    <Header as='span'>
                        View Plan
                    </Header>
                    <NavLink to="/user/plan">
                        <Button content='Back' color='purple' icon='reply' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to={`/user/plan/edit/${this.state.data.id}`}>
                        <Button content='Edit' color='purple' icon='write' floated="right" labelPosition='left'/>
                    </NavLink>
                    <NavLink to="/user/plan">
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
                            {console.log(this.state.data.plan)}
                            <Table.Row>
                                <Table.Cell>Plan Company Name</Table.Cell>
                                <Table.Cell>
                                    {this.state.data.plan.planName}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Plan Kms</Table.Cell>
                                <Table.Cell>
                                {this.state.data.plan.planKm}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Plan Charge</Table.Cell>
                                <Table.Cell>
                                {this.state.data.plan.planCharge}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Plan Status</Table.Cell>
                                <Table.Cell>
                                {this.state.data.plan.status}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}
export default ViewSinglePlanContent;