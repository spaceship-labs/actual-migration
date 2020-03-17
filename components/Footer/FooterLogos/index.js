import React from 'react';
import StudioLogo from '../../../assets/Footer/Logo-A-Studio.png';
import TrusDigicert from '../../../assets/Footer/trust_brands_digicert.svg';
import TrueKount from '../../../assets/Footer/trust_brands_kount.svg';
import TrueMcafee from '../../../assets/Footer/trust_brands_mcafee.svg';
import TrueProsa from '../../../assets/Footer/trust_brands_prosa.svg';
import TrueWave from '../../../assets/Footer/trust_brands_trustwave.svg';
import Instagram from '../../../assets/Footer/instagram.png';
import Fb from '../../../assets/Footer/fb.png';

import { Container, Image, SocialImage } from './index.styled';

const FooterLogos = () => (
  <Container isParent>
    <Container mr>
      <Image src={TrueWave} height="20" alt="" />
      <Image src={TrueProsa} height="20" alt="" />
      <Image src={TrueKount} height="20" alt="" />
      <Image src={TrueMcafee} height="20" alt="" />
      <Image src={TrusDigicert} height="20" alt="" />
    </Container>
    <Container mr>
      <SocialImage src={Fb} alt="" social />
      <SocialImage src={Instagram} alt="" social />
    </Container>
    <Container img={StudioLogo} useBg />

  </Container>
);

export default FooterLogos;
