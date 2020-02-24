import React from 'react';
import TemplateLayout from '../components/Template';
import Carousel from '../components/Carousel';
import ProductSlider from '../components/ProductSlider';
// import Banner1 from '../assets/Coverphoto/AS_ENE_2020_web_banner.jpg';

const HomePage = () => (
  <TemplateLayout>
    <Carousel /* imgs={[Banner1, Banner1]} */ />


    <div className="whiteBg">
      <ProductSlider collectionTitle="Nueva Colección" collectionLink="/category/melody" />
      <ProductSlider collectionTitle="Nueva Colección" collectionLink="/category/melody" />
      <ProductSlider collectionTitle="Nueva Colección" collectionLink="/category/melody" />
    </div>

    <style jsx global>
      {`
        body{
          font-family: Arial,'Helvetica Neue',Helvetica,sans-serif;
        }
        .whiteBg{
          background-color:#fff;
        }
      `}
    </style>

  </TemplateLayout>
);

export default HomePage;
