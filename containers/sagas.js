import { fork } from 'redux-saga/effects';
import smartMenu from './SmartMenu/sagas';
import carousel from './Carousel/sagas';
import FeaturedProducts from './FeaturedProducts/sagas';
function* run() {
  yield fork(smartMenu.run);
  yield fork(carousel.run);
  yield fork(FeaturedProducts.run);
}

export default { run };
