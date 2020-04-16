import { createActions } from 'ractionx';

const prefix = '@actualweb/containers/smartmenu';
const actions = [
  'SET_LOADING',
  'LOAD_CATEGORIES',
  'SET_CATEGORIES',
];

export default createActions(prefix, actions);
