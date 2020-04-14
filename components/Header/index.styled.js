import Styled from 'styled-components';
import HeaderBar from '@material-ui/core/AppBar';
import { MdMenu } from 'react-icons/md';

import devices from 'utils/devices';

const HeaderContainer = Styled(HeaderBar)`
  background-color: ${(props) => props.theme.primaryBackground} !important;
  display: flex;
  padding: 2px 0;
`;

const Logo = Styled.div`
  margin-top:5px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover; 
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.imgs[1]});
  /* responsive query */
  @media (min-width: ${devices.tablet}) {
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.imgs[1]});
  }
  @media (min-width: ${devices.laptop}) {
    width: 140px;
    height: 70px;
    background-image: url(${(props) => props.imgs[0]});

  }
`;

const CenteredContainer = Styled.div`
  display: flex;
  justify-content:center;
`;

const BurgerIcon = Styled(MdMenu)`
  display: inline;
  width: 25px;
  height: 25px;
  margin-top:7px;

  
  @media (min-width: ${devices.tablet}) {
    margin-top:10px;

    width: 30px;
    height: 30px;
  }
  @media (min-width: ${devices.laptop}) {
    display:none;
  }
`;
export {
  HeaderContainer,
  CenteredContainer,
  Logo,
  BurgerIcon,
};
