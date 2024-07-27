import React, { useState } from "react";
import "./performance.scss";
import Typewriter from 'typewriter-effect';
import Performancebackground from "../../../assets/images/performancebackground.png";
import Carview1 from "../../../assets/images/carview1.png";
import Carview2 from "../../../assets/images/carview2.png";
import Carview3 from "../../../assets/images/carview3.png";

function Performance() {
    const [loading, setLoading] = useState({
        carview1: true,
        carview2: true,
        carview3: true,
    });

    const handleImageLoad = (imageName) => {
        setLoading((prevLoading) => ({
            ...prevLoading,
            [imageName]: false,
        }));
    };

    return (
        <div>
            <div className="Performance-div-main">
                <div className="Performance-background-main">
                    <img src={Performancebackground} alt="Performancebackground" />
                </div>
                <div className="Performance-ab-main">
                    <div className="container">
                        <div className="Performance-flx-main">
                            <div>
                                <div className="Perfromance-title-main">
                                    <h1>
                                        <Typewriter
                                            options={{
                                                strings: ['PERFORMANCE'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h1>
                                </div>
                                <h2>
                                    <Typewriter
                                        options={{
                                            strings: ['6-SPEED AUTOMATIC'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>
                            </div>
                        </div>

                        <div className="Performance-car-all-view">
                            <div className="car-view">
                                {loading.carview1 && <div className="skeleton-loader"></div>}
                                <img
                                    src={Carview1}
                                    alt="Carview1"
                                    onLoad={() => handleImageLoad('carview1')}
                                    style={{ display: loading.carview1 ? 'none' : 'block' }}
                                />
                                <div className="Blank"></div>
                            </div>

                            <div className="car-view">
                                {loading.carview2 && <div className="skeleton-loader"></div>}
                                <img
                                    src={Carview2}
                                    alt="Carview2"
                                    onLoad={() => handleImageLoad('carview2')}
                                    style={{ display: loading.carview2 ? 'none' : 'block' }}
                                />
                                <div className="Blank"></div>
                            </div>

                            <div className="car-view">
                                {loading.carview3 && <div className="skeleton-loader"></div>}
                                <img
                                    src={Carview3}
                                    alt="Carview3"
                                    onLoad={() => handleImageLoad('carview3')}
                                    style={{ display: loading.carview3 ? 'none' : 'block' }}
                                />
                                <div className="Blank"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Performance;