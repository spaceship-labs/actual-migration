import actions from './actions';

const dispatcher = (dispatch) => ({
  loadCategories: (params) => dispatch(actions.loadCategories(params)),
});

export default dispatcher;
