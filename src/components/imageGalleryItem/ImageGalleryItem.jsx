import React from 'react';

const ImageGalleryItem = ({ picture, bigImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={picture.webformatURL}
        alt={picture.tags}
        className="ImageGalleryItem-image"
        data-largeimg={picture.largeImageURL}
        data-tag={picture.tags}
        onClick={bigImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
