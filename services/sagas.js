import { fork } from 'redux-saga/effects';
import containers from 'containers/sagas';

function* run() {
  yield fork(containers.run);
}

export default { run };
