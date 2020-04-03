import Styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import devices from '../../utils/devices';

const shadowStyle = ` 
  -webkit-box-shadow: 0px 9px 4px -6px rgba(0,0,0,.2);
  -moz-box-shadow: 0px 9px 4px -6px rgba(0,0,0,.2);
  box-shadow: 0px 9px 4px -6px rgba(0,0,0,.2);
`;

const ModalContainer = Styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed; 
  z-index: 990;
  left: 0;
  top: 0;
  width: 100vw; 
  height: 100vh; 
  overflow: none; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`;
const ModalContent = Styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  background-color: #fff;
  color:#000;
  width: 100%;
  margin: 15% auto;
  z-index: 999;

  @media(min-width:${devices.laptop}){
    margin-left:73vw;
    margin-top:80px;
    width: 25%;
  }
`;
const Title = Styled.div`
  display:flex;
  flex:1;
  background-color: #f2f2f2;
  justify-content:center;
  padding: 10px 0;
`;

const Padder = Styled.div`
  display:flex;
  flex:1;
  padding: 10px 20px;
`;
const Paragraph = Styled(Padder)`
  display:flex;
  flex:1;
  border-${(props) => (props.bottom ? 'bottom' : 'top')}:1px solid #000;
  margin:0 20px;
`;
const Muted = Styled(Padder)`
  display:flex;
  flex:1;
  margin:0 20px;
`;

const Input = Styled.input`
  display:flex;
  flex:1;
  margin: 5px 20px ;
  background-color:#f2f2f2;
  border:0;
  padding:10px 20px;
  ${shadowStyle}
`;

const Button = Styled.button`
  display:flex;
  flex: 1;
  background-color:#000;
  justify-content:center;
  border:0;
  padding: 10px 0;
  color:#fff;
  font-weight:bold;
  font-size:14px;
  margin: 5px 20px;
`;

const ProfileIcon = Styled(FaRegUserCircle)`
  display:flex;
  flex:1; 
  margin-top:7px;
  margin-left:10px;
  @media(min-width:${devices.laptop}){
    display:none;
  }
`;

const StyledSpan = Styled.span`
  max-height:20px;
  :hover {
      cursor: pointer;
  }
  strong {
    color: #e9c15f;
    margin: 0 5px;
  }
`;

const StyledLink = Styled.a`
  color: #000;
`;

const StyledSection = Styled.section`
  display:none;
  padding-top: 30px;
  font-size: 14px;
  font-family: Helvetica,sans-serif,'Helvetica Neue';
  margin: 0 15px;
  span {
    max-height:20px;
  }
  a, a:visited, a:link, a:active {
    text-decoration:none;
    color: #fff;
  }
  @media (min-width:${devices.laptop}){
    display:flex;
  }
`;

export {
  ModalContainer,
  ModalContent,
  Title,
  Paragraph,
  Muted,
  Input,
  Button,
  ProfileIcon,
  StyledSpan,
  StyledLink,
  StyledSection,
};
