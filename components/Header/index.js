import React, { Component } from 'react';
import { HeaderContainer,Logo } from './index.styled';

import StudioLogo from '../../assets/Actual-Studio-White-Logo.png'

class Header extends Component {
  render(){
    return (
      <HeaderContainer>
        <Logo src={StudioLogo} />
      </HeaderContainer>
    );
  }
}

export default Header;