import React from 'react';
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">Reservations: +1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">"The best way to find yourself is in the service of others.</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: "15px"}} />
      </div>
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiInstagram />
        <FiTwitter />
      </div>
    </div>
      <div className="app__footer-links_work">
        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Working Hours</h1>
            <p className="p__opensans">Monday - Friday:</p>
            <p className="p__opensans">8:00am - 12:00am</p>
            <p className="p__opensans">Saturday - Sudnay:</p>
            <p className="p__opensans">8:00am - 11:00pm</p>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="p__opensans">2023 All Rights Reserved.</p>
        </div>
      </div>
  </div>
);

export default Footer;
