import { takeLatest, call, put, select } from 'redux-saga/effects';
import api from 'services/api';
import actions from './actions';
import propsSelector from './selectors';
function* loadProducts({ payload }) {
  try {
    yield put(actions.setLoading(true))
    yield put(actions.setCategory(payload));
    const params = {
      items: 10,
      page: 1,
      category: payload,
      sortOption: {
        label: "Relevancia",
        key: "relevance",
        direction: "DESC"
      }
    }
    const { data } = yield call(api.products.getProductsByCategory, params);
    const { products, total } = data;
    yield put(actions.setTotal(total));
    yield put(actions.setProducts(products));
  } finally {
    yield put(actions.setLoading(false))
  }
}
function* fetchProducts() {
  try {
    yield put(actions.setFetch(true));
    const { page, category } = yield select(propsSelector);
    yield put(actions.setPage(page + 1));
    const params = {
      items: 10,
      page: page + 1,
      category,
      sortOption: {
        label: "Relevancia",
        key: "relevance",
        direction: "DESC"
      }
    }
    const { data } = yield call(api.products.getProductsByCategory, params);
    const { products } = data;
    yield put(actions.fetchToProducts(products));
  } finally {
    yield put(actions.setFetch(false))
  }
}

function* run() {
  yield takeLatest(actions.loadProducts.type, loadProducts);
  yield takeLatest(actions.fetchProducts.type, fetchProducts);
}

export default { run };
