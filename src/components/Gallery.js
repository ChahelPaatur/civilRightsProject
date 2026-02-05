import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: '/pics/IMG_4265.JPG', alt: 'Civil Rights History 1' },
    { src: '/pics/IMG_4266.jpeg', alt: 'Civil Rights History 2' },
    { src: '/pics/IMG_4267.jpeg', alt: 'Civil Rights History 3' },
    { src: '/pics/IMG_4268.JPG', alt: 'Civil Rights History 4' }
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Historical Gallery</h2>
      <p className="subtitle">Visual documentation of the civil rights movement</p>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

