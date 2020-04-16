import Styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const FetchingProgress = Styled(CircularProgress)`
  margin-top: 30px;
`;
const FullWidth = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export {
  FullWidth,
  FetchingProgress,
};
