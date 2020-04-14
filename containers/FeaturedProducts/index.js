import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductSlider from 'components/ProductSlider';
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
      return (
        <ProductSlider
          key={key}
          collectionTitle={`TOP ${products[0].categoryHandle}`}
          collectionLink={products[0].categoryHandle}
          products={sliderProducts}
        />)
    })
  }
  render() {
    return this.mapFeaturedProducts();
  }
}

export default connect(propsSelector, dispatcher)(FeaturedProductsContainer);

