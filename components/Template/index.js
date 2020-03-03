import React from 'react';
import Header from '../Header';
import SmartMenu from '../SmartMenu';
import { Content } from './index.styled';
import Footer from '../Footer';

const Template = ({ children }) => (
  <div>
    <Header />
    <Content>
      <SmartMenu />
      {children}
    </Content>
    <Footer />
    <style global jsx>
      {`
        @import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');
        body{
          margin:0;
          background-color:#f9fbf7 !important
        }
      `}
    </style>
  </div>
);

export default Template;
