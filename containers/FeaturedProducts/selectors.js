import { createSelector } from 'reselect';
import _ from 'underscore';
const containerSelector = (state) => state.containers.FeaturedProducts;

const propsSelector = createSelector(
  [containerSelector],
  (containerState) => {
    const featuredProducts = containerState.get('featuredProducts');
    const groupedProducts = _.groupBy(featuredProducts, 'categoryHandle');
    return {
      loading: containerState.get('loading'),
      featuredProducts: _.toArray(groupedProducts)
    };
  },
);


export default propsSelector;
