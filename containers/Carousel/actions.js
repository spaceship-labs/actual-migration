import { createActions } from 'ractionx';

const prefix = '@actualweb/containers/carousel';
const actions = [
  'SET_LOADING',
  'LOAD_PHOTOS',
  'SET_PHOTOS',
];

export default createActions(prefix, actions);
