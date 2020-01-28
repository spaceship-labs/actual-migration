import Styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { MdSearch } from 'react-icons/md';
import devices from '../../../utils/devices';

const Container = Styled.div`
  display:${(props) => (props.isVisible ? 'flex' : 'none')};
  margin-bottom:2px;
  @media (min-width: ${devices.laptop}) {
    display:flex !important;
  }
`;

const StyledButton = Styled(Button)`
  border-radius:0 !important;
  background-color:${(props) => props.theme.buttonPrimaryBackground} !important;
  color:${(props) => props.theme.buttonPrimaryText} !important;
  height:31px;
  margin-top:5px !important;
  padding: 0 10px !important;
  font-weight: bold !important;
  font:400 13.3333px Arial !important;

  @media (min-width: ${devices.tablet}) {
    margin-top:10px !important;
  }
  @media (min-width: ${devices.laptop}) {
    background-color:${(props) => props.theme.buttonPrimaryBackground} !important;
    height:32px;
    margin-top:20px !important;
    padding: 0 10px !important;
    font-weight: bold !important;
    color:${(props) => props.theme.buttonPrimaryText} !important;
  }

`;


const StyledInput = Styled.input`
  font:400 13.3333px Arial !important;
  border:0;
  background-color:#fff;
  color:#000;
  height:30px;
  margin-top:5px;
  padding: 0px 5px;

  :focus{
    outline:none;
  }
  @media (min-width: ${devices.tablet}) {
    margin-top:10px;
  }

  @media (min-width: ${devices.laptop}) {
    padding: 5px 5px;
    background-color:#fff;
    height:22px;
    margin-top:20px;
    color:#000;
    font-size:14px;
    line-height:32px;
  }
`;

const StyledSearch = Styled(MdSearch)`
  background-color:#fff;
  color: #666;
  margin-top:5px;
  margin-left:5px;
  height:20px;
  width:20px;
  
  @media (min-width: ${devices.laptop}) {
    height:22px;
    width:22px;
  }
`;


const StyledSearchCont = Styled.div`
  background-color: #fff;
  height: 30px;
  width: 30px;
  margin-top: 5px;
  @media (min-width: ${devices.tablet}) {
    margin-top:10px;
    height:30px;
  }
  @media (min-width: ${devices.laptop}) {
    height: 32px;
    width: 30px;
    margin-top: 20px;
  }
`;

export {
  Container,
  StyledButton,
  StyledInput,
  StyledSearch,
  StyledSearchCont,
};
