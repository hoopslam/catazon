import React from 'react';
import CategoryContainer from '../components/category/CategoryContainer';
import CategoryPreview from './shop/CategoryPreview';
import { CATEGORIES, SLIDE_SHOW_IMAGES } from '../utils/constants';
import Slider from 'react-slick';
import './Home.styles.scss';

function Home() {
    const settings = {
        infinite: true,
        dots: true,
        swipeToSlide: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };
    return (
        <div className='home-container'>
            <div className='slider-container'>
                <Slider {...settings}>
                    {SLIDE_SHOW_IMAGES.map(({ src, description, url }) => (
                        <img
                            src={src}
                            alt={description}
                        />
                    ))}
                </Slider>
            </div>

            <CategoryContainer categories={CATEGORIES} />
            <CategoryPreview />
        </div>
    );
}

export default Home;
