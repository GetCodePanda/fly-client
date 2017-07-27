import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {AppContainer} from 'react-hot-loader';

import './index.css';
import Home from './pages/Home';


const render = (Component)=>{
    ReactDOM.render(
    <AppContainer>
        <Component/>
    </AppContainer>,
    document.getElementById('root'));
}

render(Home);


if(module.hot){
    module.hot.accept('./pages/Home' , ()=> render(Home));
}