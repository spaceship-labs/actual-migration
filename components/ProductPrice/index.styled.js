import Styled from 'styled-components';
import devices from '../../utils/devices';

const ProductPriceContainer = Styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items: space-between;
  margin: -60px 10% 0 10%;
`;

const DiscountBadge = Styled.p`
  padding: 5px 30px;
  border-radius: 25px;
  background-color:#2965b9;
  color: #fff;  
  text-align:center;
  font-weight:bold;
  font-size:14px;
  margin-top:60px;
`;

const Column = Styled.div`
  display:flex;
  flex-direction:column;
  align-items: ${(props) => (props.leftAlign ? 'left' : 'center')};
  justify-content:center;
  margin-top:0;
`;

const Row = Styled.div`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content:space-between;
  flex-wrap: wrap;
  max-width:100%;

  @media (min-width:${devices.laptop}){
    flex-wrap:nowrap;
  }
`;
const CurrencyLabel = Styled.span`
  font-size:${(props) => (props.isTotal ? '14' : '9')}px;
  font-weight:${(props) => (props.isTotal ? 'bold' : 'normal')};
  color: ${(props) => (props.isRed || props.isTotal
    ? props.theme.buttonPrimaryBackground : '#000')};
`;

const PriceLabel = Styled.span`
  font-size:${(props) => (props.isTotal ? '24' : '16')}px;
  color: ${(props) => (props.isRed || props.isTotal
    ? props.theme.buttonPrimaryBackground : '#000')};
`;
const QuantitiesContainer = Styled.div`
  display:flex;
  flex:1;
`;
const Legend = Styled.p`
  font-size:12px;
  color:#333;
`;
const Select = Styled.select`
  background-color:#fff;
  font-weight: bold;
  padding:5px 10px;
`;
export {
  ProductPriceContainer,
  DiscountBadge,
  Row,
  Column,
  CurrencyLabel,
  PriceLabel,
  QuantitiesContainer,
  Legend,
  Select,
};
