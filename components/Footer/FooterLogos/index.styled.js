import Styled from 'styled-components';
import devices from 'utils/devices';

const Container = Styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  ${(props) => (props.isParent ? 'width:100%;' : '')}
  @media (min-width: ${devices.laptop}) {
    flex-wrap: no-wrap;
  }
  ${(props) => (props.mr ? 'margin-right:10%;' : '')}
  ${(props) => (props.useBg ? `
    background-image:url(${props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    min-height:150px;
    min-width:200px;
  @media (min-width: ${devices.laptop}) {
    min-width:300px;
    min-height:150px;
  }
  ` : '')}
`;

const Image = Styled.img`
  max-height: 500px;
  margin-right:20px;
`;
const SocialImage = Styled.img`
  max-height:50px;
  margin-right:25px;

`;
export {
  Container,
  Image,
  SocialImage,
};
