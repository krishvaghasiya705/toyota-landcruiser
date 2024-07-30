import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./pridesection.scss";
import Pridesectionimagemain from "../../../assets/images/prideimage.png";
import PRidelineimage from "../../../assets/illustators/landcruiseline.png";
import { Link } from 'react-router-dom';

function Pridesection() {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div>
            <div className="Pridesection">
                <div className="Pridesectionimagemain">
                    {!imageLoaded && <Skeleton height="100%" />}
                    <img
                        src={Pridesectionimagemain}
                        alt="Pridesectionimagemain"
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? 'block' : 'none' }}
                    />
                </div>
                <div className="Pridesectionmain">
                    <div className="container">
                        <div className="Prdesection-grid-main">
                            <div className="grid-item-one" data-aos="fade-up">
                                <div className="the-typewriter">
                                    <Typewriter
                                        options={{
                                            strings: ['NEW'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                    <div className="Pridesectionline" data-aos="fade-left">
                                        <img src={PRidelineimage} alt="PRidelineimage" />
                                    </div>
                                </div>
                                <div className="landcruiser-titlemaiin" data-aos="zoom-in">
                                    <div className="land-cruiser-title">
                                        <Typewriter
                                            options={{
                                                strings: ['LAND CRUISER'],
                                                autoStart: true,
                                                loop: true,
                                            }} />
                                    </div>
                                    <div className="pridetitle-main">
                                        <Typewriter
                                            options={{
                                                strings: ['THE PRIDE OF THE WORLD'],
                                                autoStart: true,
                                                loop: true,
                                            }} />
                                    </div>
                                </div>

                                <div className="pridesection-pera-one" data-aos="fade-up">
                                    <p>Toyota is proud to offer Service Experience, an assurance of Quick Service by Qualified Manpower & Inbuilt Quality of Toyota Genuine Parts for a joyful ownership experience. Toyota's Service is a completely standardized Service process ensured through Evolutionary systems & new age tools to ensure a hassle free service experience & quickly respond to all customer needs.</p>
                                </div>
                            </div>

                            <div className="grid-item-two" data-aos="fade-up">
                                <p>From the Regular Service Reminders to Instant Service status updates, from appointment booking to vehicle delivery, each process follows a series of steps which ensures quality service with utmost convenience for our customers.</p>

                                <Link to="/">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pridesection;