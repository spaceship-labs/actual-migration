import Styled from 'styled-components';
import devices from 'utils/devices';

const FooterContainer = Styled.footer`
  flex:1;
  display:flex;
  width:100%;
  background-color:${(props) => props.theme.primaryBackground}; 
  color:#fff; 
  bottom:0;
  justify-content:center;
  flex-direction:column;
`;
const ParagraphContainer = Styled.div`
  flex:1;
  align-self:center;
  max-width:${(props) => (props.small ? '60%' : '80%')};
`;
const BlackFooterParagraph = Styled.p`
  ${(props) => (props.important ? 'font-weight:bold;' : '')}
  
  font-size: ${(props) => (props.important ? '13' : '12')}px;
  font-size: ${(props) => (props.small ? '11px' : '')};

  text-align:center;
  margin-bottom:0;
  justify-content:center;
`;
const InformativeFooter = Styled.div`
  display:flex;
  flex:1;
  width:100%;
  background-color:#f8f8f8;
  color:#333;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding-top:30px;
  @media (min-width:${devices.laptop}){
    padding-top:100px;
  }
`;
const Row = Styled.div`
  display:flex;
  flex:1;
  flex-direction:row;
  flex-wrap: wrap;
  width:100%;
  margin: ${(props) => (props.isChild ? '0' : '0  10%')};
`;
const Column = Styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  min-width:50%;
  ${(props) => (props.isContainer ? `
    margin-top:10px; 
    margin-bottom:20px;
    margin-left:5%;
  ` : '')}
  @media (min-width:${devices.laptop}){
    min-width:${(props) => (props.isChild ? '50%' : '20%')};
  }
`;

const Content = Styled.div`
  margin-top:20px;
`;
const Paragraph = Styled.p`
  margin: 5px 0px;
  font-size:${(props) => (props.isTitle ? '18px' : '14px')};
  max-width: ${(props) => (props.half ? '70%' : '100%')};
`;

const LinkText = Styled.a`
  font-size:14px;
  &:visited, &:link, &:active, &:hover {
    text-decoration:none;
    color: #000;
  }
  &:hover{
    cursor:pointer;
    color:${(props) => props.theme.buttonPrimaryBackground};
  }
  
`;
export {
  InformativeFooter,
  FooterContainer,
  ParagraphContainer,
  BlackFooterParagraph,
  Row,
  Column,
  Paragraph,
  Content,
  LinkText,
};
