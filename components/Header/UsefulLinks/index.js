import React from 'react';
import { StyledLink, StyledSpan, StyledSection } from './index.styled';

const section = () => (
  <StyledSection>
    <a href="https://welove.design.blog/tag/notas/">
      <StyledSpan>
        BLOG
        <strong>|</strong>
      </StyledSpan>
    </a>
    <StyledLink href="/nuestras-marcas">
      <StyledSpan>
        NUESTRAS MARCAS
        <strong>|</strong>
      </StyledSpan>
    </StyledLink>
    <StyledLink href="/contactanos">
      <StyledSpan>
        CONTACTO
      </StyledSpan>
    </StyledLink>
  </StyledSection>
);

export default section;
