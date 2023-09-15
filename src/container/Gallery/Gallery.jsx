import React, { useRef } from 'react';
// import moduleName from 'module'
import './Gallery.css';
import { SubHeading } from '../../components';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { images } from '../../constants';

const Gallery = () => {
const scrollRef = useRef(null);
const scroll = (direction) => {
  const { current } = scrollRef;
  if(direction === 'left') {
    current.scrollLeft -= 300;
  } else {
    current.scrollLeft += 300;
  }
}

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];
return (
  
  <section className="app__gallery flex__center" id='gallery'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}>lorem es ghl uyutyf gjgjgf hh fdd utg yggjg u uddghy gghfghy hgu hg.</p>
      <button type="button" className="custom__button">View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images__container" ref={scrollRef}>
        {galleryImages.map((image, index) =>
        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
          <img src={image} alt="gallery pic" />
          <BsInstagram className='gallery__image-icon' />
        </div>
        )}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </section>
);
}

export default Gallery;
