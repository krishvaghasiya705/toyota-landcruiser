import React, { useState } from 'react';
import "./Safetysection.scss";
import Typewriter from 'typewriter-effect';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Saftyimage from "../../../assets/images/toyotasaftybackground.png";
import Exteriorline from "../../../assets/illustators/exteriorline.png";
import { Link } from 'react-router-dom';

function Safetysection() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div>
            <div className="Safetysection">
                <div className="safty-image-div-main">
                    {!isImageLoaded && <Skeleton className="skeleton-loader" height={400} />}
                    <img
                        src={Saftyimage}
                        alt="Saftyimage"
                        style={{ display: isImageLoaded ? 'block' : 'none' }}
                        onLoad={handleImageLoad}
                    />
                </div>
                <div className="saty-absolute-main">
                    <div className="container">
                        <div className="safety-main-contant-flx-main">
                            <div>
                                <div className="exterior-title-main" data-aos="fade-right">
                                    <p>
                                        <Typewriter
                                            options={{
                                                strings: ['SAFETY'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </p>
                                    <div className="Exteriorline">
                                        <img src={Exteriorline} alt="Exteriorline" />
                                    </div>
                                </div>
                                <h1 data-aos="fade-left">
                                    <Typewriter
                                        options={{
                                            strings: ['10 SRS AIRBAGS'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>

                                <Link to="/" data-aos="zoom-in">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Safetysection;