import Styled from 'styled-components';
import devices from 'utils/devices';

const Content = Styled.div`
    margin-top:40px;
    @media (min-width: ${devices.tablet}) {
        margin-top: 48px;
    }
    @media (min-width: ${devices.laptop}) {
        margin-top: 79px;
    }
`;
const WhiteContainer = Styled.div`
    background-color:#fff;
`;
const ParagraphContainer = Styled(WhiteContainer)`
    margin:10px 0 0 0;
    padding: 20px 15%;
    color: #333;
    &>h2:first-child{
        padding-top:20px;
        text-align:center;
    }
    a{
        color:#333;
    }
`;
const CenteredContainer = Styled.div`
    top:20px;
    display:flex;
    flex:1;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
`;
export {
    Content,
    WhiteContainer,
    ParagraphContainer,
    CenteredContainer,
};
