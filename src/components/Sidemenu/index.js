import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import './sidemenu.scss';

const Sidenav = () => {
    const [activeSection, setActiveSection] = useState(1);

    const handleSectionClick = (sectionNumber) => {
        setActiveSection(sectionNumber);
    };

    return (
        <div className="sidenav">
            {[...Array(10)].map((_, index) => (
                <a key={`section${index + 1}`} href={`#section${index + 1}`}>
                    <div
                        className={`divnavigation ${activeSection === index + 1 ? 'active' : ''}`}
                        id={`my-tooltip-anchor${index + 1}`}
                        onClick={() => handleSectionClick(index + 1)}
                    >
                        <p>{index + 1}</p>
                    </div>
                </a>
            ))}

            {[...Array(10)].map((_, index) => (
                <Tooltip
                    key={`tooltip-section${index + 1}`}
                    anchorSelect={`#my-tooltip-anchor${index + 1}`}
                    content={`Go to section ${index + 1}`}
                    place="left"
                />
            ))}
        </div>
    );
};

export default Sidenav;