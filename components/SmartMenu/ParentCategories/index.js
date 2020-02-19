import React from 'react';
import Link from 'next/link';
import { Container, Img, P } from './index.styled';
import SubcategoriesContent from '../Subcategories';

const ParentCategory = ({
  invert,
  image,
  categoryName,
  childs,
  featuredImages,
  link,
}) => (
  <Link href="/category/[pid]" as={link}>
    <Container>
      <Img src={image} />
      <P>{categoryName}</P>
      <SubcategoriesContent
        childs={childs}
        invert={invert}
        featuredImages={featuredImages}
      />
    </Container>
  </Link>
);
export default ParentCategory;
