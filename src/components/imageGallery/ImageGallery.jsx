import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures, bigImage }) => {
  // ---------------------------- MARKUP ----------------------------
  return (
    <ul className="ImageGallery">
      {pictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          bigImage={bigImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
