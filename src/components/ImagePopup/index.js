import React, { useEffect, useState, useCallback } from 'react';
import './imagepopup.scss';
import Closeicon from "../../assets/icons/closeicon.svg";

const ImagePopup = ({ image, onClose }) => {
    const [closing, setClosing] = useState(false);

    const handleClose = useCallback(() => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            onClose();
        }, 500);
    }, [onClose]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.body.style.overflow = image ? 'hidden' : 'auto';

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [image, handleClose]);

    if (!image) return null;

    return (
        <div className="image-popup-overlay" onClick={handleClose}>
            <div
                className={`image-popup-content ${closing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-button" onClick={handleClose}>
                    <img src={Closeicon} alt="Closeicon" />
                </button>
                <img src={image} alt="Popup" />
            </div>
        </div>
    );
};

export default ImagePopup;