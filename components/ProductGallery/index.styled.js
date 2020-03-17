import Styled from 'styled-components';
import devices from '../../utils/devices';


const shadowStyle = ` 
  -webkit-box-shadow: 0px 9px 4px -6px rgba(0,0,0,1);
  -moz-box-shadow: 0px 9px 4px -6px rgba(0,0,0,1);
  box-shadow: 0px 9px 4px -6px rgba(0,0,0,1);
`;

const Container = Styled.div`
  display:flex;
  flex:1;
  padding-top:40px;
  justify-content:center;
  @media (min-width:${devices.laptop}){
    justify-content:right;
  }
`;
const BubbleDiscount = Styled.div`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  min-width: 45px;
  min-height: 45px;
  top: -450px;
  right: 60px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bubblePrimaryBackground};
  color: #fff; 
  ${shadowStyle}
  z-index: 900;

  @media (min-width:${devices.laptop}){
    width: 45px;
    height: 45px;
    top: -600px;
    right:20px;
  }

`;

export {
  Container,
  BubbleDiscount,
};
