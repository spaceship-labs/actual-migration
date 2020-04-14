import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const developmentMiddleware = [];
if (process.env.NODE_ENV === 'development') {
  developmentMiddleware.push(logger);
}

const middlewareList = [...developmentMiddleware, sagaMiddleware];

const Store = () => {
  const createdStore = createStore(
    rootReducer,
    undefined,
    applyMiddleware(...middlewareList),
  );
  sagaMiddleware.run(sagas.run);
  return createdStore;
};
export default Store;
