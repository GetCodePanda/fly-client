import React  , {Component} from 'react';
import {Card,Grid, Header, Container, Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';





class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                count:{
                    totalNoBooking:0,
                    totalNoBookingInProgress:0,
                    totalNoBookingCompleted:0,
                    customers:0
                }
            }
        }
    }

    // componentWillMount(){
    
    // }

    render(){
        return(
           <div className="content-wrapper">
                <Card.Group itemsPerRow="4" stackable>
                    <Card>
                        <Card.Content>
                            <Grid columns={2} padded>
                                <Grid.Column>
                                    <Icon name='flag' size='huge' color='teal'/>
                                </Grid.Column>
                                <Grid.Column> 
                                    <Header 
                                        as='h2' 
                                        content={this.state.data.count.totalNoBooking}
                                        subheader='Total booking' 
                                    />
                                </Grid.Column>
                            </Grid>
                            <hr color='lightgrey'/>
                            <NavLink to="/user/booking">
                                <Header as='h5' color='grey'>
                                    <Icon name='unhide' />
                                    <Header.Content color='lightgrey'>
                                    View All
                                    </Header.Content>
                                </Header>
                            </NavLink>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Grid columns={2} padded>
                                <Grid.Column>
                                    <Icon name='checkmark box' size='huge' color='green'/>
                                </Grid.Column>
                                <Grid.Column>
                                    
                                    <Header 
                                        as='h2' 
                                        content={this.state.data.count.totalNoBookingCompleted}
                                        subheader='completed booking' 
                                    />
                                    
                                </Grid.Column>
                            </Grid>
                            <hr color='lightgrey'/>
                            <NavLink to="/user/booking">
                                <Header as='h5' color='grey'>
                                    <Icon name='unhide' />
                                    <Header.Content color='lightgrey'>
                                    View All
                                    </Header.Content>
                                </Header>
                            </NavLink>
                        </Card.Content>
                    </Card> 
                    <Card>
                        <Card.Content>
                            <Grid columns={2} padded>
                                <Grid.Column>
                                    <Icon loading name='setting' size='huge' color='yellow'/>
                                </Grid.Column>
                                <Grid.Column>  
                                    <Header 
                                        as='h2' 
                                        content={this.state.data.count.totalNoBookingInProgress} 
                                        subheader='In progress booking' 
                                    />
                                </Grid.Column>
                            </Grid>
                            <hr color='lightgrey'/>
                            <NavLink to="/user/booking">
                                <Header as='h5' color='grey'>
                                    <Icon name='unhide' />
                                    <Header.Content color='lightgrey'>
                                    View All
                                    </Header.Content>
                                </Header>
                            </NavLink>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Grid columns={2} padded>
                                <Grid.Column>
                                    <Icon name='street view' size='huge' color='pink'/>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header 
                                        as='h2' 
                                        content={this.state.data.count.customers} 
                                        subheader='Total customers' 
                                    />
                                </Grid.Column>
                            </Grid>
                            <hr color='lightgrey'/>
                            <NavLink to="/user/customers">
                                <Header as='h5' color='grey'>
                                    <Icon name='unhide' />
                                    <Header.Content color='lightgrey'>
                                    View All
                                    </Header.Content>
                                </Header>
                            </NavLink>
                        </Card.Content>
                    </Card>                                       
                </Card.Group>
            </div>
        )
    }
};


const DashboardContent = ()=>(
    <section >
        <Container >
            <Content />
        </Container>
    </section>
)

export default DashboardContent;