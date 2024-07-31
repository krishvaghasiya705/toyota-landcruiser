import React, { useEffect, useState } from "react";
import "./carslider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Previmage from "../../../assets/svg/leftarrow.svg";
import Nextimage from "../../../assets/svg/rightarrow.svg";
import car1 from "../../../assets/images/car1.png";
import car2 from "../../../assets/images/car2.png";
import car3 from "../../../assets/images/car3.png";
import car4 from "../../../assets/images/car4.png";
import car5 from "../../../assets/images/car5.png";
import car6 from "../../../assets/images/car6.png";
import car7 from "../../../assets/images/car7.png";
import car8 from "../../../assets/images/car8.png";
import car9 from "../../../assets/images/car9.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={Nextimage} alt="Next" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={Previmage} alt="Prev" />
        </div>
    );
}

function Carslider() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const images = [car1, car2, car3, car4, car5, car6, car7, car8, car9];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="car-slider-main">
            <div className="gallary-button-main">
                <div className="timeless">
                    <button>
                        <p>TIMELESS LEGACY</p>
                    </button>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="car-box" data-aos="flip-left">
                            {loading ? (
                                <Skeleton width={200} height={150} />
                            ) : (
                                <img src={image} alt={`car${index + 1}`} />
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Carslider;