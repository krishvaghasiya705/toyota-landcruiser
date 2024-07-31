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
    const [result, setResult] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [formError, setFormError] = useState("");

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setNameError("");
        setEmailError("");
        setFormError("");

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");

        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        if (!nameRegex.test(name)) {
            setNameError("Please enter a valid name.");
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email.");
            isValid = false;
        }

        if (!isValid) return;

        formData.append("access_key", "4d518933-75b3-465e-885c-6b700383bb39");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("An error occurred. Please try again.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const formElements = Array.from(event.target.form.elements);
            const index = formElements.indexOf(event.target);

            if (index > -1 && index < formElements.length - 1) {
                formElements[index + 1].focus();
            }
        }
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
                            <form onSubmit={onSubmit}>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Enter your Name" 
                                    onKeyPress={handleKeyPress} 
                                />
                                <div className="span">
                                    {nameError && <div className="error">{nameError}</div>}
                                </div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter a valid email address" 
                                    onKeyPress={handleKeyPress} 
                                />
                                <div className="span">
                                    {emailError && <div className="error">{emailError}</div>}
                                </div>
                                <textarea 
                                    name="message" 
                                    placeholder="Enter your message" 
                                    onKeyPress={handleKeyPress} 
                                ></textarea>
                                <div className="span"></div>
                                <button type="submit">submit</button>
                                <div className="span">
                                    {result && <div className="result">{result}</div>}
                                </div>
                                {formError && <div className="error">{formError}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;