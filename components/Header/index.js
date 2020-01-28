import React from 'react';
import {
  HeaderContainer,
  CenteredContainer,
  Logo,
  BurgerIcon,
} from './index.styled';
import StudioLogo from '../../assets/Actual-Studio-White-Logo.png';
import StudioLogoM from '../../assets/Actual-Studio-Mobile-White-Logo.png';
import SearchBox from './SearchBox';
import UsefulLinks from './UsefulLinks';
const Header = () => (
  <HeaderContainer position="fixed">
    <CenteredContainer>
      <BurgerIcon />
      <Logo imgs={[StudioLogo, StudioLogoM]} />
      <UsefulLinks />
      <SearchBox />
    </CenteredContainer>
  </HeaderContainer>
);

export default Header;
