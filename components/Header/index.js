import React from 'react';
import Link from 'next/link';
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
import LoginModal from '../LoginModal';

const Header = () => (
  <HeaderContainer position="fixed">
    <CenteredContainer>
      <BurgerIcon />
      <Link href="/">
        <Logo imgs={[StudioLogo, StudioLogoM]} />
      </Link>
      <UsefulLinks />
      <SearchBox />
      <LoginModal isVisible />
    </CenteredContainer>
  </HeaderContainer>
);

export default Header;
