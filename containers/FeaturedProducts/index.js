import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductSlider from 'components/ProductSlider';
import Loader from 'components/Loader';
import dispatcher from './dispatcher';
import propsSelector from './selectors';

class FeaturedProductsContainer extends Component {
  componentDidMount() {
    const { loadFeaturedProducts } = this.props;
    loadFeaturedProducts();
  }
  mapFeaturedProducts() {
    const { featuredProducts } = this.props;
    return Object.entries(featuredProducts).map(([key, products]) => {
      const sliderProducts = products.map(product => product.product);
      const collection = products[0].categoryHandle == 'comedores' ? 'comedores-2' : products[0].categoryHandle;
      return (
        <ProductSlider
          key={key}
          collectionTitle={`TOP ${products[0].categoryHandle}`}
          collectionLink={collection}
          products={sliderProducts}
        />)
    })
  }
  render() {
    const { loading } = this.props;
    return loading ? <Loader /> : this.mapFeaturedProducts();
  }
}

export default connect(propsSelector, dispatcher)(FeaturedProductsContainer);

