import React from 'react';
import Link from 'next/link';
import { buildProductUrl, buildProductImageUrl, buildPrice } from 'utils/utilities';
import {
  Container,
  Content,
  ImageContainer,
  Img,
  Paragraph,
  Span,
  StyledLink,
  DiscountBubble,
  Button,
} from './index.styled';
const Card = ({
  ItemCode: productCode,
  icon_filename: productImage,
  Discount: discountValue,
  ItemName: productTitle,
  Price: beforePrice,
  DiscountPrice: afterPrice,
  includeTax = true,
}) => (
    <Container>
      <Link
        href="/[product]/[productCode]/"
        as={buildProductUrl(productTitle, productCode)}
        passHref
      >
        <StyledLink>
          <Content>
            <ImageContainer>
              <Img src={buildProductImageUrl(productImage)} alt="" />
            </ImageContainer>
            <DiscountBubble isVisible={discountValue}>
              {`-${discountValue}%`}
            </DiscountBubble>
            <Button>VER</Button>

            <Paragraph isTitle>
              <strong><Span size={12}>{productTitle}</Span></strong>
            </Paragraph>
            <Paragraph reverse>
              <small>
                <Span size={9}>MXN</Span>
              </small>
              <Span lineThrough size={15}>
                {`$${buildPrice(beforePrice)}`}
              </Span>
              <Span>|</Span>
              <strong>
                <Span red size={11}>MXN</Span>
                <Span red size={15}>
                  {`$${buildPrice(afterPrice)}`}
                </Span>
              </strong>
            </Paragraph>
            <Paragraph reverse>
              <small>
                {includeTax && <Span size={11}>Impuestos incluidos</Span>}
              </small>
            </Paragraph>
          </Content>
        </StyledLink>
      </Link>
    </Container>
  );

export default Card;
