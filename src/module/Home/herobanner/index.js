import React, { useEffect, useRef, useState } from 'react';
import './herobanner.scss';
import herobanner from '../../../assets/images/herobanner.png';
import Typewriter from 'typewriter-effect';
import herobannerline from '../../../assets/illustators/herobannerline.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Herobanner() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const topRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        });

        topRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div>
            <div className="herobanner" ref={topRef}>
                <div className="herobanner-image-main">
                    {!imageLoaded && <Skeleton height="100%" />}
                    <img
                        src={herobanner}
                        alt="herobanner"
                        onLoad={handleImageLoad}
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                    <div className="herobanner-image-background"></div>
                </div>
                <div className="herobanner-main" data-aos="fade-left">
                    <div className="container">
                        <div className="herobanner-contant-main">
                            <div>
                                <div className="the-div-main">
                                    <div className="herobannerline" data-aos="fade-left">
                                        <img src={herobannerline} alt="herobannerline" />
                                    </div>
                                    <Typewriter
                                        options={{
                                            strings: ['THE'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                                <div className="conqueror-div" data-aos="fade-left">
                                    <Typewriter
                                        options={{
                                            strings: ['CONQUEROR'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                                <div className="oftheworld-div" data-aos="fade-left">
                                    <Typewriter
                                        options={{
                                            strings: ['OF THE WORLD'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Herobanner;