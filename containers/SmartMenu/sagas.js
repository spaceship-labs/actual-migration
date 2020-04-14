import { takeLatest, call, put } from 'redux-saga/effects';
import api from 'services/api';
import actions from './actions';

function* loadCategoriesTree() {
  try {
    yield put(actions.setLoading(true));
    const { data: categories } = yield call(api.categoriesTree.get);
    yield put(actions.setCategories(categories));
  } finally {
    yield put(actions.setLoading(false));
  }

}


function* run() {
  yield takeLatest(actions.loadCategories.type, loadCategoriesTree);
}

export default { run };
