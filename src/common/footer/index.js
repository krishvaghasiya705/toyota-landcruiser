import React from 'react';
import "./footer.scss";

import fopterbackground from "../../assets/footerimage/footer.png";
import { Link } from 'react-router-dom';

import Twitter from "../../assets/footersvg/twitter.svg";
import Facebook from "../../assets/footersvg/facebook.svg";
import Youtube from "../../assets/footersvg/youtube.svg";
import Instagram from "../../assets/footersvg/instagram.svg";


import toyotafinancialservice from "../../assets/footerimage/toyotafinancialservices.png";
import toyotagenuineparts from "../../assets/footerimage/toyotagenuineparts.png";
import toyotatrust from "../../assets/footerimage/toyotatrust.png";
import toyotaglobalwebsite from "../../assets/footerimage/toyotaglobalwebsite.png";

import ToyotaFooterlogo from "../../assets/footersvg/toyotavectorfooter.svg";


export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-background">
          <img src={fopterbackground} alt="fopterbackground" />
        </div>
        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-details-top-line">
              <div className="LInk-main">
                <Link to={"/"}>CONTACT US</Link>
              </div>
              <div>
                <Link to={"/"}>SEARCH</Link>
              </div>
              <div>
                <Link to={"/"}>ANNOUNCEMENT</Link>
              </div>
              <div>
                <Link to={"/"}>LEGAL NOTICE</Link>
              </div>
              <div>
                <Link to={"/"}>HELP</Link>
              </div>
              <div>
                <Link to={"/"}>SITE MAP</Link>
              </div>
            </div>
            <div className="Footer-content-flx-main">
              <div className="footer-content-one">
                <h2>TOP SECTIONS</h2>
                <p>PRICE LIST</p>
                <p>EBOOK</p>
                <p>FIND A DEALER</p>
                <p>TEST DRIVE</p>
                <p>BROCHURE</p>
                <p>EXCHANGE</p>
              </div>
              <div className="footer-content-one">
                <h2>QUICK LINKS</h2>
                <p>ABOUT US</p>
                <p>FEEDBACK/QUERIES</p>
              </div>
              <div className="footer-content-one">
                <h2>FOLLOW TOYOTA</h2>
                <div className="toyota-social-media-icons">
                  <a href="https://x.com/?lang=en" target="__blank">
                    <img src={Twitter} alt="Twitter" />
                  </a>
                  <a href="https://www.facebook.com/" target="__blank">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a href="https://www.youtube.com/" target="__blank">
                    <img src={Youtube} alt="Youtube" />
                  </a>
                  <a href="https://www.instagram.com/" target="__blank">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>
              </div>
              <div className="footer-content-one">
                <div className="footer-toyota-logos-main">
                  <img src={toyotafinancialservice} alt="toyotalogo" />
                  <img src={toyotagenuineparts} alt="toyotalogo" />
                  <img src={toyotatrust} alt="toyotalogo" />
                  <img src={toyotaglobalwebsite} alt="toyotalogo" />
                </div>
              </div>
            </div>
            <div className="Footer-copyright-div-main">
              <div>
                <img src={ToyotaFooterlogo} alt="ToyotaFooterlogo" />
                <p>© 2000-2024 Toyota Kirloskar Motor. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
