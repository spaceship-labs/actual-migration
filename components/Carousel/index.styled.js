import Flickity from 'react-flickity-component';
import Styled from 'styled-components';
import devices from 'utils/devices';

const Container = Styled.div`
  display: flex;
  justify-content: center;
  flex-direction:row;
`;

const Carousel = Styled(Flickity)`
:focus {
  outline:none;
}
overflow-x: hidden;
img{
  width: 100%;
  min-height: 13vh;
}
ol{
  display:none;
}
button {
  display: none;
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
  background-color: rgba(255,255,255,.5);
  color: rgba(100,100,100,.3);  
  top: -50px;
}
button:nth-child(2) {
  float: left;
}
@media (min-width:${devices.tablet}){
  button{
    display: block;
    top: -90px;
  }
}
@media (min-width:${devices.laptop}){
  button{
    min-width: 35px;
    max-width: 35px;
    min-height: 35px;
    max-height: 35px;
    top: -140px;
  }
}
@media (min-width:${devices.laptopL}){
  button {
    top:-175px;
  }
}
`;
const Ribbon = Styled.img`
  position: relative;
  top: -5px;
  z-index: -999;
  display: flex;
  align-self: center;
  max-width: 70%;
  @media (min-width:${devices.tablet}){
    max-width: 40%;
  }
  @media (min-width:${devices.laptop}){
    max-width: 25%;
    top: -37px;
  }
`;
export { Container, Carousel, Ribbon };
