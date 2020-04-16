import React from 'react';
import SmartMenu from 'containers/SmartMenu';
import Header from 'components/Header';
import { Content } from './index.styled';
import Footer from 'components/Footer';

const Template = ({ children }) => (
  <div>
    <Header />
    <Content>
      <SmartMenu />
      {children}
    </Content>
    <Footer />
  </div>
);

export default Template;
