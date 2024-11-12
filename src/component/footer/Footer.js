import React from 'react';
import cssfooter from  './Footer.module.css'
const Footer = () => {
  return (
    <footer className={cssfooter.footer}>
      <div className={cssfooter.container_footer}>
        <div className={cssfooter.footer_row}>
          <div className={cssfooter.footer_col_12}>
            <ul>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#portfolio">SKILLS</a></li>
              <li><a href="#team">Achievements & Certifications </a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
        <div className={` ${cssfooter.footer_row} ${cssfooter.footer_pading}`}>
          <div className={cssfooter.footer_col_12}>
          </div>
        </div>
        <div className={` ${cssfooter.footer_row} ${cssfooter.pt_3} ${cssfooter.copyright}`}>
          <div className={cssfooter.footer_col_12}>
          PARUIT TRADING PRIVATE LIMITED © 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
