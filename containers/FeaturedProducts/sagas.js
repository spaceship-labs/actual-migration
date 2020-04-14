import { takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import actions from './actions';

function* loadFeaturedProducts() {
  try {
    yield put(actions.setLoading(true))
    const { data: FeaturedProducts } = yield call(api.site.featuredProducts.get);
    yield put(actions.setFeaturedProducts(FeaturedProducts));
  } finally {
    yield put(actions.setLoading(false))
  }
}

function* run() {
  yield takeLatest(actions.loadFeaturedProducts.type, loadFeaturedProducts);
}

export default { run };
