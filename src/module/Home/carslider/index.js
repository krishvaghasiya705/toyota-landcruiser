import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={Nextimage} alt="Nextimage" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={Previmage} alt="Previmage" />
        </div>
    );
}

function Carslider() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        });
    }, []);

    var settings = {
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
        <div>
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
                        <div className="car-box" data-aos="flip-left">
                            <img src={car1} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car2} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car3} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car4} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car5} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car6} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car7} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car8} alt="car" />
                        </div>
                        <div className="car-box" data-aos="flip-left">
                            <img src={car9} alt="car" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Carslider;
