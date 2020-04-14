import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../services/api';
import actions from './actions';

function* loadCategoriesTree() {
  const { data: categories } = yield call(api.categoriesTree.get);
  yield put({ type: actions.setCategories.type, payload: categories });
}


function* run() {
  yield takeLatest(actions.loadCategories.type, loadCategoriesTree);
}

export default { run };
