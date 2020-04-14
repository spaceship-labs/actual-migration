import { combineReducers } from 'redux';
import SmartMenu from './SmartMenu/reducer';
import Carousel from './Carousel/reducer';
export default combineReducers(
  {
    SmartMenu,
    Carousel
  }
);
