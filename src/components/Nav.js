import React from 'react';
import {Container} from 'semantic-ui-react';

import TopNav from './TopNav';

const Nav = ()=>(
    <section>
        <Container>
            <TopNav/><br/><br/>
            <hr className="fly-divider"/>
        </Container>
    </section>
)

export default Nav;