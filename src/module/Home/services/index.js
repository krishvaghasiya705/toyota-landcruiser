import React from "react";
import "./services.scss";
import Typewriter from 'typewriter-effect';
import Serviceline from "../../../assets/illustators/servicesline.png";
import Quickicon from "../../../assets/svg/quick.svg";
import Qualified from "../../../assets/svg/qualified.svg";
import Quality from "../../../assets/svg/quality.svg";
import Comfort from "../../../assets/svg/comfort.svg";

const serviceData = [
    {
        icon: Quickicon,
        title: "QUICK",
        description: "Quick Service with highest degree of precision ensures On time delivery, Every time Speedy Road side assistance."
    },
    {
        icon: Qualified,
        title: "QUALIFIED",
        description: "They are recruited from the best technical institutes supported by Toyota, are constantly groomed through Toyota."
    },
    {
        icon: Quality,
        title: "QUALITY",
        description: "A quality vehicle deserves a quality service. At Toyota, Quality check is an inherent part of each process & the staff is committed."
    },
    {
        icon: Comfort,
        title: "COMFORT",
        description: "A quality vehicle deserves a quality service. At Toyota, Quality check is an inherent part of each process & the staff is committed."
    }
];

function Services() {

    return (
        <div className="Services-main">
            <div className="container">
                <div className="our-title-main" data-aos="fade-right">
                    <div className="Serviceline">
                        <img src={Serviceline} alt="Serviceline" />
                    </div>
                    <p><Typewriter
                        options={{
                            strings: ['OUR'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                </div>
                <div className="services-title-main" data-aos="fade-left">
                    <p><Typewriter
                        options={{
                            strings: ['SERVICES'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
                </div>
            </div>
            <div className="container-one">
                <div className="services-grid-main">
                    {serviceData.map((service, index) => (
                        <div className="grid-items" key={index} data-aos="fade-up">
                            <div className="grid-items-image">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <div className="grid-items-contant">
                                <h1>{service.title}</h1>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;