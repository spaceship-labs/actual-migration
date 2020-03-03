import Styled from 'styled-components';

const Container = Styled.div`
  display:flex;
  flex: 0 1;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  ${(props) => (props.mr ? 'margin-right:10%;' : '')}
  ${(props) => (props.useBg ? `
    background-image:url(${props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-width:350px;
    min-height:150px;
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
