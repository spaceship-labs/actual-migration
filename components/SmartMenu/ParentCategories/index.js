import React from 'react';
import Link from 'next/link';
import { Container, Img, P } from './index.styled';
import SubcategoriesContent from '../Subcategories';

const ParentCategory = ({
  invert,
  image,
  Name,
  Childs,
  featuredImages,
  Handle,
}) => (
  <Link href="/category/[pid]" as={`/category/${Handle}`}>
    <Container>
      <Img src={image} />
      <P>{Name}</P>
      <SubcategoriesContent
        childs={Childs}
        invert={invert}
        featuredImages={featuredImages}
      />
    </Container>
  </Link>
);
export default ParentCategory;
