import React, { useState } from 'react';
import './styles/home.scss'

const Homepage = (props) => {
    const [coder, setcoder] = useState("<coder/>")
    console.log(props);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-none">
                        <h1 className='text-center'>{coder }</h1>
                    </div>
                    <div className="col-12 gap">
                    <div className="img-bloc">
                    <img src="/img/photo_2021-06-08_22-53-01.jpg" className='w-100 img' alt="" />
                        </div>
                        <div className="animatsya">
                        
                            <img src="/img/html.png" alt="" className="html anim" />
                            <img src="/img/bootstrap.png" alt="" className="boot anim" />
                            <img src="/img/sass.png" alt="" className="sass anim" />
                            <img src="/img/jc.png" alt="" className="jc anim" />
                            <img src="/img/react.png" alt="" className="react anim" />
                            <img src="/img/redux.png" alt="" className="redux anim" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;