import Flickity from 'react-flickity-component';
import Styled from 'styled-components';
import devices from '../../utils/devices';

const Title = Styled.p`
  width: 50%; 
  margin: 20px 30%;
  text-align: center; 
  border-bottom: 1px solid #000; 
  line-height: 0.1em;
  &>span { 
     background:#fff; 
     padding:0 10px; 
  }
  text-align: center;
  text-transform: uppercase;
  font-size:24px;
`;

const Container = Styled.div`
  display:flex;
  flex:1;
  margin: 20px 0 0 0;
  @media (min-width:${devices.tablet}){
    margin: 30px 0 0 10%;
  }
  @media (min-width:${devices.laptop}){
    margin: 50px 0 0 10%;
  }
`;

const Carousel = Styled(Flickity)`
max-width:100%;

flex:1;
:focus {
  outline:none;
}
overflow-x: hidden;
ol{
  display:none;
}
&>button {
  border: 0;
  margin: 0 15px;
  float: right;
  min-width: 25px;
  max-width: 25px;
  min-height: 25px;
  max-height: 25px;
  text-align: center;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  background-color: rgba(255,255,255,1);
  color: rgba(100,100,100,.3);  
  top: -150px;
}
&>button:nth-child(2) {
  float: left;
}
@media (min-width:${devices.tablet}){
  &>button{
    display: block;
    top: -90px;
  }
}
@media (min-width:${devices.laptop}){
  max-width:65%;

  &>button{
    min-width: 35px;
    max-width: 35px;
    min-height: 35px;
    max-height: 35px;
    top: -180px;
  }
}
@media (min-width:${devices.laptopL}){
  &>button {
    top:-175px;
  }
}
`;
const CircleContainer = Styled.div`
display:none;
@media (min-width:${devices.laptop}){
  display: flex;
  flex-shrink: 1;
  align-items:center;
  margin-left:40px;
}
`;
const Circle = Styled.a`
  display:flex;
  flex-direction: column;
  font-family: 'Helvetica Neue',Helvetica,sans-serif;
  text-align:center;
  align-items:center;
  justify-content:center;
  padding:10px;
  text-decoration:none;
  
  width:180px;
  height:180px;
  border-radius:50%;

  background-color:#f2f2f2;
  color:#000;
  transition: background-color .2s;
  &:hover {
    color:#f7de9e;
    strong{
      color:#fff;
    }
    background-color:#000;
  }

  @media (min-width:${devices.laptop}){
    font-size:24px;
  }
`;
const MobileButton = Styled.a`
  display:flex;
  flex: 1;
  background-color:#000;
  justify-content:center;
  padding: 10px 0;
  color:#fff;
  text-transform: uppercase;
  font-weight:bold;
  font-size:14px;
  text-decoration:none;
  margin:0 5% 60px 5%;
  @media (min-width:${devices.laptop}){
    display: none;
  }
`;
export {
  Title, Container, Carousel, Circle, CircleContainer, MobileButton,
};
