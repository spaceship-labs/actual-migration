import Styled from 'styled-components';

const Container = Styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  border:1px solid #ccc;
  margin: 0 10%;
`;
const Tab = Styled.div`
  display:flex;
  flex:1;
  background-color:#fff;
  padding: 10px;
  border:1px solid #ccc;
`;

const Content = Styled.div`
  padding: 15px 25px;
`;
export { Container, Tab, Content };
