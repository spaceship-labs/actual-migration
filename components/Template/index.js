import React from 'react';
import Header from '../Header';
import SmartMenu from '../../containers/SmartMenu';
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
  </div>
);

export default Template;
