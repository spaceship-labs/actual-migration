import React from 'react';
import { HeaderContainer, Logo } from './index.styled';

import StudioLogo from '../../assets/Actual-Studio-White-Logo.png';

const Header = ({ setLoading, loading }) => {
  setLoading(false);
  return (
    <HeaderContainer>
      {!loading && <Logo src={StudioLogo} />}
      {loading && 'Loading actual logo'}
    </HeaderContainer>
  );
};
export default Header;
