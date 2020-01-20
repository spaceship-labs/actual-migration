import actions from './actions';

const dispatcher = (dispatch) => ({
  setLoading: (params) => dispatch(actions.setLoading(params)),
});

export default dispatcher;
