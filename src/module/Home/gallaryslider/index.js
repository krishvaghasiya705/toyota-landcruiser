import React, { useState, useContext } from 'react';
import { CursorContext } from '../../../components/CursorProvider';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallaryslider.scss";
import Gallary1 from "../../../assets/images/gallary1.png";
import Gallary2 from "../../../assets/images/gallary2.png";
import Gallary3 from "../../../assets/images/gallary3.png";
import Gallary4 from "../../../assets/images/gallary4.png";
import Gallary5 from "../../../assets/images/gallary5.png";
import Gallary6 from "../../../assets/images/gallary6.png";
import Gallary7 from "../../../assets/images/gallary7.png";
import Interior1 from "../../../assets/images/interior1.png";
import Interior2 from "../../../assets/images/interior2.png";
import Interior3 from "../../../assets/images/interior3.png";
import Interior4 from "../../../assets/images/interior4.png";
import Previmage from "../../../assets/svg/leftarrowsc.svg";
import Nextimage from "../../../assets/svg/rightarrowsc.svg";

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
            <img src={Previmage} alt="Previous" />
        </div>
    );
}

const GallerySlider = () => {
    const { setColor } = useContext(CursorContext);
    const [activeTab, setActiveTab] = useState('exterior');
    const [loadedImages, setLoadedImages] = useState({});

    const handleMouseEnter = () => {
        setColor('highlightColor');
    };

    const handleMouseLeave = () => {
        setColor('defaultColor');
    };

    const handleImageLoad = (index) => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => {
            const sliderElement = document.querySelector('.slick-slide');
            if (sliderElement) {
                sliderElement.classList.add('shake');
                setTimeout(() => {
                    sliderElement.classList.remove('shake');
                }, 500);
            }
        }
    };

    const exteriorImages = [
        Gallary1,
        Gallary2,
        Gallary3,
        Gallary4,
        Gallary5,
        Gallary6,
        Gallary7,
    ];

    const interiorImages = [
        Interior1,
        Interior2,
        Interior3,
        Interior4,
    ];

    const renderImages = (images) => {
        return images.map((image, index) => (
            <div key={index} className="slick-slide-custom">
                {!loadedImages[index] && <Skeleton height={500} />}
                <img
                    src={image}
                    alt={`Slide ${index}`}
                    style={{ display: loadedImages[index] ? 'block' : 'none' }}
                    onLoad={() => handleImageLoad(index)}
                    onMouseEnter={handleMouseLeave}
                    onMouseLeave={handleMouseEnter}
                />
            </div>
        ));
    };

    return (
        <div className="gallary-main" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="Gallary-title-main" onMouseEnter={handleMouseEnter}>
                <div className="container-two">
                    <div className="gallary-buttons-main">
                        <div className="Gallarybutton" onMouseEnter={handleMouseEnter}>
                            <button
                                className={activeTab === 'exterior' ? 'active' : ''}
                                onClick={() => setActiveTab('exterior')}
                            >
                                <p>GALLERY</p>
                            </button>
                        </div>

                        <div className="exterior-and-interior-button">
                            <button
                                className={activeTab === 'exterior' ? 'active' : ''}
                                onClick={() => setActiveTab('exterior')}
                                onMouseEnter={handleMouseLeave} onMouseLeave={handleMouseEnter}
                            >
                                EXTERIOR
                            </button>
                            <button
                                className={activeTab === 'interior' ? 'active' : ''}
                                onClick={() => setActiveTab('interior')}
                                onMouseEnter={handleMouseLeave} onMouseLeave={handleMouseEnter}
                            >
                                INTERIOR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {activeTab === 'exterior' && (
                <div className="gallery-slider" onMouseEnter={handleMouseEnter}>
                    <Slider {...settings}>
                        {renderImages(exteriorImages)}
                    </Slider>
                </div>
            )}

            {activeTab === 'interior' && (
                <div className="gallery-slider" onMouseEnter={handleMouseEnter}>
                    <Slider {...settings}>
                        {renderImages(interiorImages)}
                    </Slider>
                </div>
            )}
        </div>
    );
};

export default GallerySlider;