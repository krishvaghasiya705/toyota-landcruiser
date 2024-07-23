import React, { useState, useEffect } from 'react';
import './progressbar.scss';

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (scrollPx / winHeightPx) * 100;

        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{ height: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
