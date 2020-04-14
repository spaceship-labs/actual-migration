import React from 'react';
import ParentCategory from './ParentCategories';
import { Nav } from './index.styled';

const SmartMenu = ({ categoriesTree }) => (
  <Nav>
    {categoriesTree.map((Category, index) => (
      <ParentCategory key={Category.Handle} {...Category} invert={index > 3} />
    ))}
  </Nav>
);

export default SmartMenu;
