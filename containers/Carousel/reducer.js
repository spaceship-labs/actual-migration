import model from './model';
import actions from './actions';

const initial = model();

const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case actions.setLoading.type:
      return state.set('loading', payload);
    case actions.setPhotos.type:
      return state.set('photos', payload);
    default:
      return state;
  }
};

export default reducer;
