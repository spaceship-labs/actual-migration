import Styled from 'styled-components';
import devices from '../../../utils/devices';

const StyledSpan = Styled.span`
    max-height:20px;
    :hover {
        cursor: pointer;
    }
    strong {
        color: #e9c15f;
        margin: 0 5px;
    }
`;

const StyledLink = Styled.a`
    color: #fff;
`;
const StyledSection = Styled.section`
    /* Not shown in mobile */
    display:none;
    padding-top: 30px;
    font-size: 14px;
    font-family: Helvetica,sans-serif,'Helvetica Neue';
    margin: 0 15px;
    span {
        max-height:20px;
    }
    a, a:visited, a:link, a:active {
        text-decoration:none;
        color: #fff;
    }
    @media (min-width:${devices.laptop}){
        display:flex;
    }

`;

export {
  StyledSpan,
  StyledLink,
  StyledSection,
};
