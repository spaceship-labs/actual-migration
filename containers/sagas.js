import { fork } from 'redux-saga/effects';
import smartMenu from './SmartMenu/sagas';

function* run() {
  yield fork(smartMenu.run);
}

export default { run };
