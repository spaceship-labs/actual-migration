import { takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import actions from './actions';

function* loadCoverPhotos() {
  try {
    yield put(actions.setLoading(true))
    const { data: bannerPhotos } = yield call(api.site.banners.get, process.env.activeSite);
    yield put(actions.setPhotos(bannerPhotos));
  } finally {
    yield put(actions.setLoading(false))
  }

}


function* run() {
  yield takeLatest(actions.loadPhotos.type, loadCoverPhotos);
}

export default { run };
