import React from 'react';
import ParentCategory from './ParentCategories';
import { Nav } from './index.styled';

const dataTest = {
  image: 'https://via.placeholder.com/300',
  categoryName: 'Muebles',
  link: '/category/muebles',
  childs:
  [
    {
      title: 'Salas',
      link: '/category/salas',
    },
    {
      title: 'Sillones',
      link: '/category/sillones',
    },
  ],
  featuredImages: [
    'https://via.placeholder.com/500x700',
    'https://via.placeholder.com/500x700',
  ],
};

const SmartMenu = () => (
  <Nav>
    <ParentCategory {...dataTest} />
    <ParentCategory {...dataTest} />
    <ParentCategory {...dataTest} />
    <ParentCategory {...dataTest} />
    <ParentCategory {...dataTest} invert />
    <ParentCategory {...dataTest} invert />
    <ParentCategory {...dataTest} invert />
  </Nav>
);

export default SmartMenu;
