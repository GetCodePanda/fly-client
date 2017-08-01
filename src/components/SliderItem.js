import React from 'react';
import {Image , Header , Icon} from 'semantic-ui-react';

const SliderItem = (props)=>(
    <div key={props.myKey}>   
        <p>
            <h5>
                <Icon name='quote left' size="big" color="yellow"/>
                <span className="testimonial-content">
                   {props.feedback} 
                </span><Icon  name='quote right' size="big" color="yellow"/>
            </h5>
        </p>
        <Image src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' size='tiny' shape='circular' centered/>
        <Header size="large" textAlign="center" color="purple" className='testimonial-username'>{props.content}</Header>
    </div>
);

export default SliderItem;