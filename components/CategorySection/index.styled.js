import Styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import devices from 'utils/devices';

const Section = Styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 5%;
  background-color: #fff;
  margin-top: 10px;
`;

const SectionTitle = Styled.h1`
  width: 100%;
  font-weight: normal;
  text-transform: capitalize;
  font-size: 18px;
  padding-left:15px;
  @media (min-width: ${devices.tablet}){
    font-size: 24px;
  }
`;

const Number = Styled.span`
  color: #e2023f;
  margin: 0 5px;
`;

const ResultsSection = Styled.div`
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const FetchingProgress = Styled(CircularProgress)`
  margin-top: 30px;
`;
const FullWidth = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export {
  Section,
  SectionTitle,
  Number,
  ResultsSection,
  FullWidth,
  FetchingProgress,
};
