import Styled from 'styled-components';
import devices from '../../utils/devices';

const Content = Styled.div`
    margin-top:40px;
    @media (min-width: ${devices.tablet}) {
        margin-top: 48px;
    }
    @media (min-width: ${devices.laptop}) {
        margin-top: 79px;
    }
`;
export {
  Content,
};
