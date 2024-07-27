import React, { useState, useEffect } from "react";
import "./exterior.scss";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Exteriorbackground from "../../../assets/images/exteriorbackground.png";
import Exteriorline from "../../../assets/illustators/exteriorline.png";
import { Link } from "react-scroll";

function Exterior() {
    const [bgImageLoaded, setBgImageLoaded] = useState(false);
    const [lineImageLoaded, setLineImageLoaded] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        });
    }, []);

    return (
        <div>
            <div className="exterior-main">
                <div className="exterior-backgorund-image-main">
                    {!bgImageLoaded && <Skeleton height="100%" />}
                    <img
                        src={Exteriorbackground}
                        alt="Exteriorbackground"
                        style={{ display: bgImageLoaded ? 'block' : 'none' }}
                        onLoad={() => setBgImageLoaded(true)}
                    />
                </div>
                <div className="Exterior-ab-main">
                    <div className="container">
                        <div className="Exterior-content-main" data-aos="fade-left">
                            <div>
                                <div className="Exterior-titlem-main" data-aos="zoom-in">
                                    <div className="Exterior-line">
                                        {!lineImageLoaded && <Skeleton height={10} />}
                                        <img
                                            src={Exteriorline}
                                            alt="Exteriorline"
                                            style={{ display: lineImageLoaded ? 'block' : 'none' }}
                                            onLoad={() => setLineImageLoaded(true)}
                                        />
                                    </div>
                                    <h1>
                                        <Typewriter
                                            options={{
                                                strings: ['EXTERIOR'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h1>
                                </div>
                                <p data-aos="fade-up">
                                    <Typewriter
                                        options={{
                                            strings: ["NEW GRILLE AND <br/> HOOD DESIGN"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </p>
                                <Link to="/" data-aos="fade-down">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exterior;
