import React from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import Header from '../../components/Header';
import { propsSelector } from './selectors';

const HeaderContainer = (props) => (
  <Header {...props} />
);
export default connect(
  propsSelector,
  dispatcher,
)(HeaderContainer);
