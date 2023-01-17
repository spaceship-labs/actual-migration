import React from 'react';

import { Container, Image, SocialImage } from './index.styled';

const FooterLogos = () => (
  <Container isParent>
    <Container mr>
      <Image src='assets/Footer/trust_brands_trustwave.svg' height="20" alt="" />
      <Image src='assets/Footer/trust_brands_prosa.svg' height="20" alt="" />
      <Image src='assets/Footer/trust_brands_kount.svg' height="20" alt="" />
      <Image src='assets/Footer/trust_brands_mcafee.svg' height="20" alt="" />
      <Image src='assets/Footer/trust_brands_digicert.svg' height="20" alt="" />
    </Container>
    <Container mr>
      <SocialImage src='assets/Footer/fb.png' alt="" social />
      <SocialImage src='assets/Footer/instagram.png' alt="" social />
    </Container>
    <Container img='assets/Footer/Logo-A-Studio.png' useBg />

  </Container>
);

export default FooterLogos;
