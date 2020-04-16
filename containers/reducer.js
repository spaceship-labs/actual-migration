import { combineReducers } from 'redux';
import SmartMenu from './SmartMenu/reducer';
import Carousel from './Carousel/reducer';
import FeaturedProducts from './FeaturedProducts/reducer';
import CategorySection from './CategorySection/reducer';
export default combineReducers(
  {
    SmartMenu,
    Carousel,
    FeaturedProducts,
    CategorySection,
  }
);
