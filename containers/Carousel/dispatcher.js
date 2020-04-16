import actions from './actions';

const dispatcher = (dispatch) => ({
  loadPhotos: (params) => dispatch(actions.loadPhotos(params)),
});

export default dispatcher;
