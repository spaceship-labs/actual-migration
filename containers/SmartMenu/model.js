import { Record } from 'immutable';

const name = 'containers.SmartMenu';
const shape = {
  loading: false,
  categoriesTree: [],
};
export default Record(shape, name);
