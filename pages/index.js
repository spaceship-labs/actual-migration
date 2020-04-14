import React from 'react';
import TemplateLayout from '../components/Template';
import Carousel from '../components/Carousel';
import ProductSlider from '../components/ProductSlider';
// import Banner1 from '../assets/Coverphoto/AS_ENE_2020_web_banner.jpg';
import { WhiteContainer } from '../components/Template/index.styled';

const HomePage = () => (
  <TemplateLayout>
    <Carousel /* imgs={[Banner1, Banner1]} */ />

    <WhiteContainer>
      <ProductSlider collectionTitle="Nueva Colección" collectionLink="melody" />
      <ProductSlider collectionTitle="Nueva Colección" collectionLink="melody" />
      <ProductSlider collectionTitle="Nueva Colección" collectionLink="melody" />
    </WhiteContainer>
  </TemplateLayout>
);

export default HomePage;
