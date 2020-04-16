import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmarMenuComponent from 'components/SmartMenu';
import dispatcher from './dispatcher';
import propsSelector from './selectors';
import Loader from 'components/Loader';
class SmartMenuContainer extends Component {
  componentDidMount() {
    const { loadCategories } = this.props;
    loadCategories();
  }

  render() {
    const { loading } = this.props;
    return loading ? <Loader /> : <SmarMenuComponent {...this.props} />;
  }
}

export default connect(propsSelector, dispatcher)(SmartMenuContainer);
