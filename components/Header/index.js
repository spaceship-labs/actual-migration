import React from 'react';
import { HeaderContainer, Logo } from './index.styled';

import StudioLogo from '../../assets/Actual-Studio-White-Logo.png';

const Header = () => (
  <HeaderContainer>
    <Logo src={StudioLogo} />
  </HeaderContainer>
);

export default Header;
