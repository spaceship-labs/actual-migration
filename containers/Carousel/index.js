import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarouselComponent from 'components/Carousel';
import dispatcher from './dispatcher';
import propsSelector from './selectors';

class CarouselContainer extends Component {
  componentDidMount() {
    const { loadPhotos } = this.props;
    loadPhotos();
  }

  render() {
    return <CarouselComponent {...this.props} />;
  }
}

export default connect(propsSelector, dispatcher)(CarouselContainer);
