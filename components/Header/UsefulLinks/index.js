import React from 'react';
import Link from 'next/link';
import { StyledLink, StyledSpan, StyledSection } from './index.styled';

const section = () => (
  <StyledSection>
    <a href="https://welove.design.blog/tag/notas/">
      <StyledSpan>
        BLOG
        <strong>|</strong>
      </StyledSpan>
    </a>
    <Link href="/nuestras-marcas" passHref>
      <StyledLink>
        <StyledSpan>
          NUESTRAS MARCAS
          <strong>|</strong>
        </StyledSpan>
      </StyledLink>
    </Link>
    <Link href="/contactanos" passHref>
      <StyledLink>
        <StyledSpan>
          CONTACTO
        </StyledSpan>
      </StyledLink>
    </Link>

  </StyledSection>
);

export default section;
