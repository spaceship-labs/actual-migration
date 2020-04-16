import { Record } from 'immutable';

const name = 'containers.CategorySection';
const shape = {
  category: '',
  loading: false,
  products: [],
  total: 0,
  page: 1,
  isFetching: false,
};
export default Record(shape, name);
