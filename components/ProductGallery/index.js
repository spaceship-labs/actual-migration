import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Container, BubbleDiscount } from './index.styled';

const images = [
  {
    original: 'https://via.placeholder.com/500',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    original: 'https://via.placeholder.com/300',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    original: 'https://via.placeholder.com/200',
    thumbnail: 'https://via.placeholder.com/150',
  },
];
const options = {
  showFullscreenButton: false,
  showPlayButton: false,
};
const Gallery = ({ discountValue }) => (
  <Container>
    <ImageGallery {...options} items={images} />
    <BubbleDiscount isVisible="10">
      {`-${discountValue || 10}%`}
    </BubbleDiscount>
  </Container>
);

export default Gallery;
