import { fork } from 'redux-saga/effects';
import smartMenu from './SmartMenu/sagas';
import carousel from './Carousel/sagas';
function* run() {
  yield fork(smartMenu.run);
  yield fork(carousel.run);
}

export default { run };
