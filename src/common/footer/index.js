import React from 'react';
import "./footer.scss";

import fopterbackground from "../../assets/footerimage/footer.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-background">
          <img src={fopterbackground} alt="fopterbackground" />
        </div>
      </footer>
    </div>
  )
}
