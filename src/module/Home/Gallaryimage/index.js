import React, { useState } from 'react';
import "./Gallaryimage.scss";
import Gallaryimage1 from "../../../assets/images/Gallaryimage1.png";
import Gallaryimage2 from "../../../assets/images/Gallaryimage2.png";
import Gallaryimage3 from "../../../assets/images/Gallaryimage3.png";
import Gallaryimage4 from "../../../assets/images/Gallaryimage4.png";
import ImagePopup from '../../../components/ImagePopup';

function Gallaryimage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Gallaryimage1, alt: 'Gallaryimage1' },
    { src: Gallaryimage2, alt: 'Gallaryimage2' },
    { src: Gallaryimage3, alt: 'Gallaryimage3' },
    { src: Gallaryimage4, alt: 'Gallaryimage4' },
  ];

  const handleImageClick = (event, image) => {
    if (event.target.tagName === 'IMG') {
      event.stopPropagation();
      setSelectedImage(image);
    }
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="Gallaryimage">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={(event) => handleImageClick(event, image.src)}
          />
        ))}
      </div>

      <ImagePopup image={selectedImage} onClose={handleClosePopup} />
    </div>
  );
}

export default Gallaryimage;
