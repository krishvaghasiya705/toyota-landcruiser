import React, { useEffect } from "react";
import "./exterior.scss";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Exteriorbackground from "../../../assets/images/exteriorbackground.png";
import Exteriorline from "../../../assets/illustators/exteriorline.png";
import { Link } from "react-scroll";

function Exterior() {
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
                    <img src={Exteriorbackground} alt="Exteriorbackground" />
                </div>
                <div className="Exterior-ab-main">
                    <div className="container">
                        <div className="Exterior-content-main" data-aos="fade-left">
                            <div>
                                <div className="Exterior-titlem-main" data-aos="zoom-in">
                                    <div className="Exterior-line">
                                        <img src={Exteriorline} alt="Exteriorline" />
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
    )
}

export default Exterior;
