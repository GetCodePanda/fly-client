import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import FlyRouter from './routes/index';


const render =(Component)=>{
    ReactDOM.render(
        <Component/>,
    document.getElementById('root'));
};

render(FlyRouter);