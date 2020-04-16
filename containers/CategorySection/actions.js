import { createActions } from 'ractionx';

const prefix = '@actualweb/containers/categorysection';
const actions = [
  'SET_LOADING',
  'SET_CATEGORY',
  'SET_FETCH',
  'LOAD_PRODUCTS',
  'FETCH_PRODUCTS',
  'FETCH_TO_PRODUCTS',
  'SET_PRODUCTS',
  'SET_PAGE',
  'SET_TOTAL',
];

export default createActions(prefix, actions);
