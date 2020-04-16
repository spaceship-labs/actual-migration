import actions from './actions';

const dispatcher = (dispatch) => ({
  loadProducts: (params) => dispatch(actions.loadProducts(params)),
  fetchProducts: (params) => dispatch(actions.fetchProducts(params)),
});

export default dispatcher;
