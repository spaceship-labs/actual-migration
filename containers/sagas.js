import { fork } from 'redux-saga/effects';
import smartMenu from './SmartMenu/sagas';
import carousel from './Carousel/sagas';
import FeaturedProducts from './FeaturedProducts/sagas';
import CategorySection from './CategorySection/sagas';
function* run() {
  yield fork(smartMenu.run);
  yield fork(carousel.run);
  yield fork(FeaturedProducts.run);
  yield fork(CategorySection.run);
}

export default { run };
