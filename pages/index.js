import React from 'react';
import TemplateLayout from 'components/Template';
import Carousel from 'containers/Carousel';
import ProductSlider from 'components/ProductSlider';
import FeaturedProducts from 'containers/FeaturedProducts'
// import Banner1 from 'assets/Coverphoto/AS_ENE_2020_web_banner.jpg';
import { WhiteContainer } from 'components/Template/index.styled';

const HomePage = () => (
  <TemplateLayout>
    <Carousel />

    <WhiteContainer>
      <FeaturedProducts />
    </WhiteContainer>
  </TemplateLayout>
);

export default HomePage;
