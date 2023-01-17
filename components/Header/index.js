import React from 'react';
import Link from 'next/link';

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
        <Logo  />
      </Link>
      <UsefulLinks />
      <SearchBox />
    </CenteredContainer>
  </HeaderContainer>
);

export default Header;
