import { combineReducers } from 'redux';
import containers from '../containers/reducer';

const rootReducer = combineReducers(
  {
    containers,
  },
);

export default rootReducer;
