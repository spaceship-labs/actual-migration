import { createActions } from 'ractionx';

const prefix = '@actualweb/containers/featuredproducts';
const actions = [
  'SET_LOADING',
  'LOAD_FEATURED_PRODUCTS',
  'SET_FEATURED_PRODUCTS'
];

export default createActions(prefix, actions);
