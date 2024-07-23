// src/pages/home/Home.js
import React, { useContext } from 'react';
import ProgressBar from '../../components/Proggressbar';
import Header from '../../common/header';
import ScrollToTopButton from '../../components/scrolltotop';
import './Home.scss';
import { CursorContext } from '../../components/CursorProvider';
import Herobanner from './herobanner';
import Pridesection from './pridesection';
import Carslider from './carslider';
import Services from './services';
import Safetysection from './safetysection';
import Exterior from './exterior';
import Performance from './performance';
import GallerySlider from './gallaryslider';
import Gallaryimage from './Gallaryimage';
import Contact from './Contact';

export default function Home() {
  const { setColor } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setColor('highlightColor');
  };

  const handleMouseLeave = () => {
    setColor('defaultColor');
  };

  return (
    <div className="body">

      {/* <------- this is itemscomponents --------> */}
      <Header />
      <ProgressBar />
      <div className="scroll-top-button-div-main">
        <ScrollToTopButton />
      </div>



      {/* <------- this is page components --------> */}
      <div>
        {/* <------ this is a cursour color chnager ------> */}
        <div className="highlight-section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Herobanner />
        </div>
        <div >
          <Pridesection />
        </div>

        {/* <------ this is a cursour color chnager ------> */}
        <div className="highlight-section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Carslider />
        </div>
        <div >
          <Services />
        </div>
        <div >
          <Safetysection />
        </div>
        <div>
          <Exterior />
        </div>
        <div>
          <Performance />
        </div>
        <div>
          <GallerySlider />
        </div>
        <div>
          <Gallaryimage />
        </div>
        <div>
          <Contact />
        </div>
      </div>





    </div>
  );
}
