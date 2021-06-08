import React, {Component} from 'react';
import Slider from "react-slick";
import './styles/about.scss'

const About = () => {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 10
        };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 ">
                    <h1>about.</h1>
                    <h2>I'm a UI/UX product designer based in sunny Sydney, Australia.</h2>
                    <p>
                        I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not
                        pushing pixels, you'll find me cooking, gardening or working out in the park.
                    </p>
                    <div className="technology d-flex">
                        <div className="img">
                            <img src="./img/html.png" className="" alt=""/>
                            <p className="text-center">HTML, CSS</p>
                        </div>
                        <div className="img">
                            <img src="./img/jc.png" className="" alt=""/>
                            <p className="text-center">JavaScript</p>
                        </div>
                        <div className="img">
                            <img src="./img/sass.png" className="" alt=""/>
                            <p className="text-center">Sass</p>
                        </div>
                        <div className="img">
                            <img src="./img/bootstrap.png" className="" alt=""/>
                            <p className="text-center">Bootstrap</p>
                        </div>
                        <div className="img">
                            <img src="./img/react.png" className="" alt=""/>
                            <p className="text-center">React JS</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src="./img/my-image.jpg" className="w-100 h-100" alt=""/>
                </div>
                <div className="col-12 carusel-one">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <img src="./img/rasm1.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm3.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm4.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm5.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm6.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm7.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm8.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm9.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm10.jpg" alt=""/>
                            </div>
                            <div>
                                <img src="./img/rasm11.jpg" alt=""/>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;