import React, { useEffect, useState, useContext } from 'react';
import './CustomCursor.scss';
import { CursorContext } from './../CursorProvider/index';

const CustomCursor = () => {
    const { color } = useContext(CursorContext);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const moveDot = () => {
            setDotPosition(position);
        };

        window.addEventListener('mousemove', moveCursor);
        const interval = setInterval(moveDot, 5);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clearInterval(interval);
        };
    }, [position]);

    return (
        <>
            <div
                className={`cursor ${color}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={`dot ${color}`}
                style={{
                    left: `${dotPosition.x}px`,
                    top: `${dotPosition.y}px`,
                }}
            />
        </>
    );
};

export default CustomCursor;
