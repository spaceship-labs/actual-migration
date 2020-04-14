import React from 'react';
import Link from 'next/link';
import {
  Container, Column, Item, Image,
} from './index.styled';

const Subcategories = ({ invert, childs, featuredImages }) => (
  <Container invert={invert}>
    <Column>
      {childs && childs.map(({ Name: title, Handle: link }) => (
        <Link key={link} href="/category/[pid]" as={`/category/${link}`}>
          <Item>
            {title}
            <hr />
          </Item>
        </Link>
      ))}
    </Column>
    {featuredImages && featuredImages.map(
      (image) => {
        const size = featuredImages.length > 1 ? 2 : 1;
        return <Column key={image}><Image size={size} src={image} /></Column>;
      },
    )}
  </Container>
);

export default Subcategories;
