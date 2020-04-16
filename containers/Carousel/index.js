import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarouselComponent from 'components/Carousel';
import Loader from 'components/Loader';
import dispatcher from './dispatcher';
import propsSelector from './selectors';

class CarouselContainer extends Component {
  componentDidMount() {
    const { loadPhotos } = this.props;
    loadPhotos();
  }

  render() {
    const { loading } = this.props;
    return loading ? <Loader /> : <CarouselComponent {...this.props} />;
  }
}

export default connect(propsSelector, dispatcher)(CarouselContainer);
