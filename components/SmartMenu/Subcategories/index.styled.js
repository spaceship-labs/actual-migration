import Styled from 'styled-components';

const shadowStyle = ` 
  -webkit-box-shadow: 0px 9px 8px -6px rgba(0,0,0,.7);
  -moz-box-shadow: 0px 9px 8px -6px rgba(0,0,0,.7);
  box-shadow: 0px 9px 8px -6px rgba(0,0,0,.7);
`;

const Container = Styled.div`
  background-color:#f8f8f8;
  position:absolute;
  margin-top:95px;
  align-self:flex-start;
  flex-wrap: wrap;
  min-width: 40vw;
  min-height: 30vh;
  max-height:45vh;
  ${shadowStyle}
  z-index:999;
  ${(props) => (props.invert ? `
    flex-direction:row-reverse;
    right:0;  
  ` : '')}

`;
const Column = Styled.div`
  flex-grow: 1;
  width: ${(props) => (props.size === 2 ? '66%' : '33%')};
  min-height:100%;
  flex-direction:column;
`;

const Item = Styled.li`

  list-style:none;
  margin: 10px 20px 10px 20px;
  font-size:14px;
  text-transform: capitalize;
  color:#030202;
  &:hover{
    font-weight:bold;
    color:#000;
    hr {
      border-top:1px solid red;
      color: red;
      width:30px;
    }
  } 
  hr {
    border-top:1px solid #fff;
    color:#fff;
    transition: width .2s;
    width:0px;
    margin:0 0 -5px 0;
  }
`;

const Image = Styled.img`
  max-height:40vh;
`;

export {
  Container,
  Column,
  Item,
  Image,
};
