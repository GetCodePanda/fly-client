import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {AppContainer} from 'react-hot-loader';

import './index.css';
import FlyRouter from './routes/index';


const render =(Component)=>{
    ReactDOM.render(
    <AppContainer>
        <Component/>
    </AppContainer>,
    document.getElementById('root'));
};

render(FlyRouter);

if(module.hot){
    module.hot.accept('./routes/index' , ()=> render(FlyRouter));
}