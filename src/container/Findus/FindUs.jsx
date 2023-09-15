import React from 'react';
import { images, data } from '../../constants'
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">123 Bungalow Dr Island, WI 85442</p>
        <p className="p__cormorant" style={{ color: "#dcca87", margin: '2rem 0'}}>Open Hours</p>
        <p className="p__opensans">Mon - Fri 10am - 2am</p>
        <p className="p__opensans">Sat - Sun 10am - 2am</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem"}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img"><img src={images.findus} alt="find-us" />
    </div>
  </div>
);

export default FindUs;
