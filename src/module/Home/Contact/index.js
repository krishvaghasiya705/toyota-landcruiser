import React, { useState } from "react";
import "./Contact.scss";
import ContactBackground from "../../../assets/images/conatctbannerbackground.png";
import SkeletonLoader from "../../../components/SkeletonLoader";

import instagramicon from "../../../assets/svg/instagram.svg";
import facebookicon from "../../../assets/svg/facebook.svg";
import twittericon from "../../../assets/svg/twitter.svg";
import youtubeicon from "../../../assets/svg/youtube.svg";

function Contact() {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="contact-main">
            <div className="contact-background-main">
                {isLoading && <SkeletonLoader />}
                <img
                    src={ContactBackground}
                    alt="Contact Background"
                    onLoad={handleImageLoad}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
                <div className="Blank"></div>
            </div>
            <div className="contact-content-main">
                <div className="container">
                    <div className="contact-main">
                        <div className="grid-items-one">
                            <h1>CONTACT US</h1>
                            <p className="contact-one">(541) 323-6101</p>
                            <p className="contact-two">(541) 323-6101</p>
                            <div className="locate-pera">
                                <p>115 NW Oregon Ave, #7 Bend, OR 97703</p>
                                <div className="social-media-icons">
                                    <img src={instagramicon} alt="instagramicon" />
                                    <img src={facebookicon} alt="facebookicon" />
                                    <img src={twittericon} alt="twittericon" />
                                    <img src={youtubeicon} alt="youtubeicon" />
                                </div>
                            </div>
                        </div>

                        <div className="grid-items-two">
                            <h2>FOLLOW TOYOTA</h2>
                            <form>
                                <input type="text" placeholder="Enter your Name" required />
                                <input type="text" placeholder="Enter a valid email address" required />
                                <textarea placeholder="Enter your message" required></textarea>
                                <button type="submit">submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
