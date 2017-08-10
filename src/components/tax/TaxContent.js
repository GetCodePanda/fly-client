import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Header, Button} from 'semantic-ui-react';

import {getTax} from './../../api/Tax';


class TaxContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                taxs:[]
            }
        }
    }

    setTaxData(){
        return getTax({
                     paginate: {
                        default: 2,
                        max: 4
                    }
                })
                .then(res=>{
                    console.log(res.data)
                    return this.setState({
                        data:{
                            taxs:res.data
                        }
                    }) 
                });
    }

    componentWillMount(){
        return this.setTaxData();
    }

    render(){
        return(
            <div className="content-wrapper">
                <Header as='h2' dividing>
                     Tax
                </Header>

                <div className="sub-content-wrapper">
                 
                    <Button icon='archive' color='purple' content='Delete' labelPosition='left' floated="left"/>
                    <Button icon='download'  color='purple' content='Export' labelPosition='left' floated="left"/>
                    <NavLink to="/user/tax/new">
                        <Button content='Create New' color='purple' icon='plus' floated="right" labelPosition='left'/>
                    </NavLink>
                    
                </div>
            </div>
        )
    }
}

export default TaxContent;