import model from './model';
import actions from './actions';

const initial = model();

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actions.setLoading.type:
      return state.set('loading', action.payload);
    default:
      return state;
  }
};

export default reducer;
