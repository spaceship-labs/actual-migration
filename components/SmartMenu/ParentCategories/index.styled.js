import Styled from 'styled-components';

const Container = Styled.div`
  &:hover{
    background-color:#555;
    cursor:pointer;
    div{
      display:flex;
    }
  }
  div{
    display:none;
  }
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 120px;
  position:relative;
`;

const Img = Styled.img`
  margin-top:10px;
  max-height:40px;
`;

const P = Styled.p`
  text-align:center;
  text-transform: uppercase;
  font-size:14px;
  max-width:65px;
`;

export {
  Container,
  Img,
  P,
};
