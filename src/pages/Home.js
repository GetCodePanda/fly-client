import React from 'react';
import {Container , Grid} from 'semantic-ui-react';

import AuthSection from '../components/AuthSection';
import NavBar from '../components/NavBar';

const Home = () =>(
    <section>
        <NavBar/>
        <Container>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <AuthSection/>
                    </Grid.Column>
                    <Grid.Column>
                        <h1>Testmonial section</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </section>  
);

export default Home;