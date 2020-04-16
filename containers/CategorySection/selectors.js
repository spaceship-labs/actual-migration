import { createSelector } from 'reselect';

const containerSelector = (state) => state.containers.CategorySection;

const propsSelector = createSelector(
  [containerSelector],
  (containerState) => {
    return {
      category: containerState.get('category'),
      loading: containerState.get('loading'),
      isFetching: containerState.get('isFetching'),
      total: containerState.get('total'),
      products: containerState.get('products'),
      page: containerState.get('page'),
    };
  },
);


export default propsSelector;
