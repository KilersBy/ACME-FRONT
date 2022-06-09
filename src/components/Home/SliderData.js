import React, { useState } from 'react'
import { SliderImg } from './SliderImg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const SliderData = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const preSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={preSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderImg.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="" className='image' />
                        )}
                    </div>
                )
            })}
        </section>
    );
};

export default SliderData;