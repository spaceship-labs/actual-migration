import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategorySection from 'components/CategorySection';
import Loader from 'components/Loader';
import dispatcher from './dispatcher';
import propsSelector from './selectors';
import { withRouter } from 'next/router';
class CategorySectionContainer extends Component {
  componentDidMount() {
    const { loadProducts, fetchProducts, router } = this.props;
    const { query: { uid = '' } } = router;
    loadProducts(uid);
  }
  render() {
    const { loading } = this.props;
    return loading ? <Loader /> : <CategorySection {...this.props} />
  }
}

export default connect(propsSelector, dispatcher)(withRouter(CategorySectionContainer));

