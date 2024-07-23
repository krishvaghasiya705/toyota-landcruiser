import React from "react";
import "./performance.scss";
import Typewriter from 'typewriter-effect';
import Performancebackground from "../../../assets/images/performancebackground.png";
import Carview1 from "../../../assets/images/carview1.png";
import Carview2 from "../../../assets/images/carview2.png";
import Carview3 from "../../../assets/images/carview3.png";

function Performance() {
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
                                <img src={Carview1} alt="Carview1" />
                                <div className="Blank"></div>
                            </div>

                            <div className="car-view">
                                <img src={Carview2} alt="Carview2" />
                                <div className="Blank"></div>
                            </div>

                            <div className="car-view">
                                <img src={Carview3} alt="Carview3" />
                                <div className="Blank"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Performance;