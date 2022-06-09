import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Home.css';
import SliderData from './SliderData.js';
import { SliderImg } from './SliderImg.js';

function Home() {
    return (

        <div>
            <Navbar />
            <div className="container p-5">
                <h1 className="display-3 text-black text-center">
                    {/* Et si tout commençait à vos pieds */}
                </h1>
            </div>
            <div className='section'>
                <SliderData slides={SliderImg} />
            </div>
        </div>
    );
};

export default Home;