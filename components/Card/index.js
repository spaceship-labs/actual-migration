import React from 'react';
import {
  Container,
  Content,
  Img,
  Paragraph,
  Span,
  Link,
  DiscountBubble,
  Button,
} from './index.styled';

const Card = ({
  link,
  productImage,
  discountValue,
  title,
  beforePrice,
  afterPrice,
  includeTax,
}) => (
  <Container>
    <Link href={link}>
      <Content>
        <Img src={productImage} alt="" />
        <DiscountBubble isVisible={discountValue}>
          {`-${discountValue}%`}
        </DiscountBubble>
        <Button>VER</Button>

        <Paragraph title>
          <strong><Span size={12}>{title}</Span></strong>
        </Paragraph>
        <Paragraph reverse>
          <small>
            <Span size={9}>MXN</Span>
          </small>
          <Span lineThrough size={15}>
            {`$${beforePrice}`}
          </Span>
          <Span>|</Span>
          <strong>
            <Span red size={11}>MXN</Span>
            <Span red size={15}>
              {`$${afterPrice}`}
            </Span>
          </strong>
        </Paragraph>
        <Paragraph reverse>
          <small>
            {includeTax && <Span size={11}>Impuestos incluidos</Span>}
          </small>
        </Paragraph>
      </Content>
    </Link>

  </Container>
);

export default Card;
