import React from 'react';
import Link from 'next/link';
import {
  Container, Column, Item, Image,
} from './index.styled';

const Subcategories = ({ invert, childs, featuredImages }) => (
  <Container invert={invert}>
    <Column>
      {childs && childs.map(({ title, link }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link key={index} href="/category/[pid]" as={link}>
          <Item>
            {title}
            <hr />
          </Item>
        </Link>
      ))}
    </Column>
    {featuredImages.map(
      (image, index) => {
        const size = featuredImages.length > 1 ? 2 : 1;
        // eslint-disable-next-line react/no-array-index-key
        return <Column key={index}><Image size={size} src={image} /></Column>;
      },
    )}
  </Container>
);

export default Subcategories;
