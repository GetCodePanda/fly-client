import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Card,Header,Button} from 'semantic-ui-react';

import {getVendor} from './../../api/Vendor';

import VendorCard from './../_display/VendorCard';


class VendorContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                vendors:[]
            }
        }
    }

    setVendorData(){
        return getVendor({
                     paginate: {
                        default: 2,
                        max: 4
                    }
                })
                .then(res=>{
                    console.log(res.data)
                    return this.setState({
                        data:{
                            vendors:res.data
                        }
                    }) 
                });
    }

    componentWillMount(){
        return this.setVendorData();
    }

    render(){
        return(
            <div className="content-wrapper">
                <Header as='h2' dividing>
                     Vendor
                </Header>

                <div className="sub-content-wrapper">
                 
                    <Button icon='archive' color='purple' content='Delete' labelPosition='left' floated="left"/>
                    <Button icon='download'  color='purple' content='Export' labelPosition='left' floated="left"/>
                    <NavLink to="/user/vendor/new">
                        <Button content='Create New' color='purple' icon='plus' floated="right" labelPosition='left'/>
                    </NavLink>
                    
                </div>
                <br/><br/><br/><br/>
                    <Card.Group itemsPerRow={2}>
                        <VendorCard data={this.state.data.vendors}/>                  
                    </Card.Group>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default VendorContent;