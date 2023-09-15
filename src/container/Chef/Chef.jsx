import React from 'react';
import { images } from '../../constants'
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <section className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <div className="app__wrapper_img chef app__wrapper_img-reverse"><img src={images.chef} alt="Chef" /></div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote"><img src={images.quote} alt="Quote" />
          <p className="p__opensans">
            Lorem ipsum dolor. Minima, incidunt. Lorem ipsum dolor sit.
          </p>
          </div>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga distinctio eos, exercitationem consectetur eius repudiandae illum assumenda repellendus sunt ut, facere provident? Corrupti, alias!
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Signature" />
        </div>

      </div>
      
    </div>
  </section>
);

export default Chef;
