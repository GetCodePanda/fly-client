import React from 'react';
import {Container , Grid} from 'semantic-ui-react';

import AuthSection from '../components/AuthSection';
import NavBar from '../components/NavBar';
import Testimonial from '../components/Testimonial';

const Home = () =>(
    <section>
        <NavBar/>
        <Container >
            <Grid columns={2} padded>
                <Grid.Row stretched>
                    <Grid.Column>
                        <AuthSection/>
                    </Grid.Column>
                    <Grid.Column >
                            <Testimonial />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </section>  
);

export default Home;