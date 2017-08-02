import React  , {Component} from 'react';
import Nav from './Nav';
import fetch from 'node-fetch';

class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            data:'initial data'
        }
    }

    componentWillMount(){
        fetch('http://localhost:3030/users' , {
            methods:'GET',
            headers:{
                'Authorization':localStorage.getItem('feathers-jwt')
            }
        }).then(r=>r.json())
          .then(r=>{
              this.setState({
                data:r.data
              })
          })
    }

    render(){
        return(
           <pre>
                {this.state.data[0].username} 
            </pre>
        )
    }
};


const DashboardContent = ()=>(
    <section>
        <Nav/>
        <Content/>
    </section>
)

export default DashboardContent;