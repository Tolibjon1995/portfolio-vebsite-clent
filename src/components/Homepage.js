import React, { useState } from 'react';
import './styles/home.scss'

const Homepage = () => {
    const [coder, setcoder] = useState("<coder/>")
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center'>{coder }</h1>
                    </div>
                    <div className="col-12">
                        <div className="animatsya">
                        <div className="img-bloc">
                        <img src="/img/photo_2021-06-08_22-53-01.jpg" className='w-100 img' alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;