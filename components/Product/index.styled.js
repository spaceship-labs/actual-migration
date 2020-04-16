import Styled from 'styled-components';
import devices from 'utils/devices';

const Container = Styled.div`
  margin-top:10px;
  display:flex;
  flex:1;
  flex-direction:column;
  flex-wrap:wrap;
  padding-bottom:20px;
  background-color:#fff;
`;
const ProductContainer = Styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  @media (min-width:${devices.laptop}){
    flex-direction: row;
  }
`;

const ContainerColumn = Styled.div`
  display:flex;
  flex-direction: column;
  flex:1;
  align-items:right;
`;

export {
  Container,
  ContainerColumn,
  ProductContainer,
};
