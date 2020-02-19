import Styled from 'styled-components';
import devices from '../../utils/devices';

const shadowStyle = ` 
  -webkit-box-shadow: 0px 9px 8px -6px rgba(0,0,0,.7);
  -moz-box-shadow: 0px 9px 8px -6px rgba(0,0,0,.7);
  box-shadow: 0px 9px 8px -6px rgba(0,0,0,.7);
`;

const Nav = Styled.nav`
display:none;
@media (min-width: ${devices.laptop}) {
  display:flex;
  flex-direction:row;
  justify-content:center;
  background-color:#fff;
  max-height:110px;
  ${shadowStyle}
}

`;

export {
  Nav,
};
