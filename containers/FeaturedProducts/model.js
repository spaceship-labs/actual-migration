import { Record } from 'immutable';

const name = 'containers.FeaturedProducts';
const shape = {
  loading: false,
  featuredProducts: [],
};
export default Record(shape, name);
