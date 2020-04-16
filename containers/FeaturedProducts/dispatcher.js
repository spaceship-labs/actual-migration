import actions from './actions';

const dispatcher = (dispatch) => ({
  loadFeaturedProducts: (params) => dispatch(actions.loadFeaturedProducts(params)),
});

export default dispatcher;
