import React from 'react';
import { Carousel } from 'antd';
import './CenteredCarousel.scss';

const carouselItems = [
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
];

const CenteredCarousel = () => {
  return (
    <div className="centered-carousel" style={{ padding: 0 }}>
      <Carousel
        autoplay
        dots={false}
        arrows
        centerMode={true}
        infinite
        slidesToShow={3}
        slidesToScroll={1}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-card">
            {item.src ? (
              <img src={item.src} alt={`Slide ${index + 1}`} />
            ) : (
              <div className="placeholder">Slide {index + 1}</div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CenteredCarousel;
