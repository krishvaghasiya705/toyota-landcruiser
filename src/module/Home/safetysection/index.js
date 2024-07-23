import React, { useEffect } from 'react';
import "./Safetysection.scss";
import Typewriter from 'typewriter-effect';
import Saftyimage from "../../../assets/images/toyotasaftybackground.png";
import Exteriorline from "../../../assets/illustators/exteriorline.png";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Safetysection() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        });
    }, []);

    return (
        <div>
            <div className="Safetysection">
                <div className="safty-image-div-main">
                    <img src={Saftyimage} alt="Saftyimage" />
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