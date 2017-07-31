import React , {Component} from 'react';
import Slider from 'react-slick';
import { Grid , Image , Header , Icon } from 'semantic-ui-react'


class Testimonial extends Component {
    render(){
     const settings = {
        dots: true,
        autoplay:true,
        speed: 1700,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:true
        };

         return (
            <Grid centered textAlign="center">
                <Grid.Column>
                     <Header size='huge' color="purple">Testimonial</Header>
                    <Slider {...settings} className="slider">

                        <div>   
                            <p>
                                <h5>
                                    <Icon name='quote left' size="large"/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur hic iusto natus fugit aut, minima numquam iure reprehenderit suscipit molestias, aperiam praesentium. Necessitatibus maiores, ipsum enim quisquam reprehenderit. Nulla, doloribus!
                                    <Icon  name='quote right' size="large" />
                                </h5>
                            </p>
                            <Image src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' size='tiny' shape='circular' centered/>
                            <Header size="small" textAlign="center">user name</Header>

                        </div>
                       <div>   
                            <p>
                                <h5>
                                    <Icon name='quote left' size="large"/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur hic iusto natus fugit aut, minima numquam iure reprehenderit suscipit molestias, aperiam praesentium. Necessitatibus maiores, ipsum enim quisquam reprehenderit. Nulla, doloribus!
                                    <Icon  name='quote right' size="large" />
                                </h5>
                            </p>
                            <Image src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' size='tiny' shape='circular' centered/>
                            <Header size="small" textAlign="center">user name</Header>

                        </div>
                        <div>   
                            <p>
                                <h5>
                                    <Icon name='quote left' size="large"/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur hic iusto natus fugit aut, minima numquam iure reprehenderit suscipit molestias, aperiam praesentium. Necessitatibus maiores, ipsum enim quisquam reprehenderit. Nulla, doloribus!
                                    <Icon  name='quote right' size="large" />
                                </h5>
                            </p>
                            <Image src='https://react.semantic-ui.com/assets/images/avatar/large/jenny.jpg' size='tiny' shape='circular' centered/>
                            <Header size="small" textAlign="center">user name</Header>

                        </div>
                    </Slider>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Testimonial;