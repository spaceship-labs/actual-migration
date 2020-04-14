import React from 'react';
import Link from 'next/link';
import StudioLogo from 'assets/Actual-Studio-White-Logo.png';
import StudioLogoM from 'assets/Actual-Studio-Mobile-White-Logo.png';
import {
  HeaderContainer,
  CenteredContainer,
  Logo,
  BurgerIcon,
} from './index.styled';
import SearchBox from './SearchBox';
import UsefulLinks from './UsefulLinks';

const Header = () => (
  <HeaderContainer position="fixed">
    <CenteredContainer>
      <BurgerIcon />
      <Link href="/">
        <Logo imgs={[StudioLogo, StudioLogoM]} />
      </Link>
      <UsefulLinks />
      <SearchBox />
    </CenteredContainer>
  </HeaderContainer>
);

export default Header;
