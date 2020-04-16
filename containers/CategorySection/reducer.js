import model from './model';
import actions from './actions';

const initial = model();

const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case actions.setLoading.type:
      return state.set('loading', payload);
    case actions.setCategory.type:
      return state.set('category', payload);
    case actions.setTotal.type:
      return state.set('total', payload);
    case actions.setProducts.type:
      return state.set('products', payload);
    case actions.fetchToProducts.type:
      const prevProducts = state.get('products').concat(payload);
      return state.set('products', prevProducts);
    case actions.setFetch.type:
      return state.set('isFetching', payload);
    default:
      return state;
  }
};

export default reducer;
