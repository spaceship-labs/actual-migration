import Styled from 'styled-components';

const HeaderContainer = Styled.header`
  background-color: ${(props) => props.theme.primaryBackground};
  color: #fff;
`;

const Logo = Styled.img`
  width: 144px;
  height: 72px;
`;


export {
  HeaderContainer,
  Logo,
};
