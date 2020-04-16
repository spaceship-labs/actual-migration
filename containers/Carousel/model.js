import { Record } from 'immutable';

const name = 'containers.Carousel';
const shape = {
  loading: false,
  photos: [],
};
export default Record(shape, name);
