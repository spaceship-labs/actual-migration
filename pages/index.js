import React from 'react';
import TemplateLayout from '../components/Template';
import Carousel from '../components/Carousel';
// import Banner1 from '../assets/Coverphoto/AS_ENE_2020_web_banner.jpg';

const HomePage = () => (
  <TemplateLayout>
    <Carousel /* imgs={[Banner1, Banner1]} */ />
    <style jsx global>
      {`
        body{
          font-family: Arial,'Helvetica Neue',Helvetica,sans-serif;
        }
      `}
    </style>

  </TemplateLayout>
);

export default HomePage;
