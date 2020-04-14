import Styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import devices from 'utils/devices';

const Section = Styled.section`
  margin: 0 10%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);
`;
const TableRow = Styled.tr`
  display:flex;
  &>td:first-child:before {
    content: '\\002022';
    color: #e2023f;
    font-size: 14px;
    margin-right: 12px; 
  }
  &>td{
    font-size:12px;
  }
  &>td:first-child {
    width: 50%;
  }
  &>td:nth-child(2) {
    padding-left: 10px;
  }
  @media (min-width:${devices.laptop}){
    &>td:first-child {
      width: 30%;
    }
  }

`;
const Table = Styled.table`
  display:flex;
  flex-direction:column;
  margin: 0 0 0 20px;
`;
const Container = Styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  font-size: 14px;
  padding: 9px 0;
  ${(props) => (props.noBorder ? '' : `
    border-bottom: 1px solid rgba(0, 0, 0, 0.87);
    justify-content:center;
    margin: 0 10%;
  `)}
`;
const AddToCartButton = Styled.button`
  @keyframes zoomInAndOut{
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
  display:flex;
  flex:1;
  width:100%;
  padding: 10px 20px;
  background-image: ${(props) => props.theme.cartButton};
  letter-spacing: 2px;
  border: solid 1px #ce9403;
  justify-content:center;
  align-items:center;
  font-weight:bold;
  transition: all .4s ease 0s;
  animation: zoomInAndOut 1.5s infinite;
  font-size:14px;
  &:hover {
    letter-spacing: 3px;
  }
  @media(min-width:${devices.laptop}){
    margin-top:30px;
  }
`;
const CartLogo = Styled(AiOutlineShoppingCart)`
  font-size:32px;
  align-items:center;
  justify-content:center;
  margin-right:5px;
`;
const CartItems = Styled.span`
  position:relative;
  top:-3px;
  left:24px;
  letter-spacing:0;
  font-size:12px;
`;
export {
  Table,
  TableRow,
  Container,
  Section,
  AddToCartButton,
  CartLogo,
  CartItems,
};
