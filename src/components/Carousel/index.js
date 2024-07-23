import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
    };

    const images = [
        'https://static3.toyotabharat.com/images/showroom/lc300/gallery-ext01-1720x759.webp',
        'https://static3.toyotabharat.com/images/showroom/lc300/gallery-ext02-1720x759.webp',
        'https://static3.toyotabharat.com/images/showroom/lc300/gallery-ext03-1720x759.webp',
    ];

    return (
        <div className="gallery-slider">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slick-slide-custom">
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
