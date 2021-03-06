import React, {Component, useState, useEffect} from 'react';
import Slider from "react-slick";
import './styles/about.scss'
import rasm1 from "../images/photo1.jpg"
import rasm2 from "../images/photo2.jpg"
import rasm5 from "../images/photo3.jpg"
import rasm6 from "../images/photo4.jpg"
import rasm7 from "../images/photo5.jpg"
import rasm8 from "../images/photo5.jpg"

import rasm10 from "../images/IMG_20210411_151456.jpg"
import rasm11 from "../images/IMG_20210411_151016.jpg"
import myImage from "../images/IMG_20210407_124823.jpg"

const About = () => {

    const [img, setImg] = useState(rasm1);
    const [rasmTwo, setRasmTwo] = useState(rasm2);
    const [rasmFive, setRasmFive] = useState(rasm5);
    const [rasmSix, setRasmSix] = useState(rasm6);
    const [rasmSeven, setRasmSeven] = useState(rasm7);
    const [rasmEight, setRasmEight] = useState(rasm8);

    const [rasmTen, setRasmTen] = useState(rasm10);
    const [rasmElenev, setRasmElenev] = useState(rasm11);
    const [myImg, setMyImg] = useState(myImage);

    const changeImg = () => {
        setImg(myImg);
        setMyImg(img)
    };

    const changeImgTwo = () => {
        setRasmTwo(myImg);
        setMyImg(rasmTwo)
    };

    const changeImgFive = () => {
        setRasmFive(myImg);
        setMyImg(rasmFive)
    };

    const changeImgSix = () => {
        setRasmSix(myImg);
        setMyImg(rasmSix)
    };

    const changeImgSeven = () => {
        setRasmSeven(myImg);
        setMyImg(rasmSeven)
    };

    const changeImgEight = () => {
        setRasmEight(myImg);
        setMyImg(rasmEight)
    };



    const changeImgTen = () => {
        setRasmTen(myImg);
        setMyImg(rasmTen)
    };


    const changeImgEleven = () => {
        setRasmElenev(myImg);
        setMyImg(rasmElenev)
    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    // centerPadding: "60px",
                    rows: 2,
                    // slidesPerRow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    rows: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12 qwerty ">
                    <h1>O'zim haqimda.</h1>
                    <h2>Assalomu alaykum men front-end dasturchiman</h2>
                    <p>
                    Menga murakkab muammolarni oddiy, chiroyli va intuitiv dizaynlarga aylantirish yoqadi.
                    </p>
                    <div className="technology d-flex justify-content-between">
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
                <div className="col-lg-6 col-12 qwerty">
                    <img src={myImg} className="w-100" height="540px" alt=""/>
                </div>
                <div className="col-12 carusel-one">
                    <div>
                        <Slider {...settings}>
                            <div>
                                <img src={img} onClick={changeImg} alt=""/>
                            </div>
                            <div>
                                <img src={rasmTwo} onClick={changeImgTwo} alt=""/>
                            </div>
                            <div>
                                <img src={rasmFive} onClick={changeImgFive} width="540px" height="540px" alt=""/>
                            </div>
                            <div>
                                <img src={rasmSix} onClick={changeImgSix} alt=""/>
                            </div>
                            <div>
                                <img src={rasmSeven} onClick={changeImgSeven} width="540px" height="540px" alt=""/>
                            </div>
                            <div>
                                <img src={rasmEight} onClick={changeImgEight} alt=""/>
                            </div>
                            <div>
                                <img src={rasmTen} onClick={changeImgTen} alt=""/>
                            </div>
                            <div>
                                <img src={rasmElenev} onClick={changeImgEleven} alt=""/>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;