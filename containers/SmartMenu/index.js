import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import propsSelector from './selectors';
import SmarMenuComponent from '../../components/SmartMenu';

class SmartMenuContainer extends Component {
  componentDidMount() {
    const { loadCategories } = this.props;
    loadCategories();
  }

  render() {
    return <SmarMenuComponent {...this.props} />;
  }
}

export default connect(propsSelector, dispatcher)(SmartMenuContainer);
