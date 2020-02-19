import React, { Component } from 'react';
// import Flickity from 'react-flickity-component';
import { Container, Carousel as Flickity, Ribbon } from './index.styled';
import RibbonShipping from '../../assets/Coverphoto/ribbon.png';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        autoPlay: 2000,
        arrowShape: {
          x0: 5,
          x1: 60,
          y1: 50,
          x2: 70,
          y2: 40,
          x3: 30,
        },
        wrapAround: true,
        lazyLoad: 1,
      },
    };
  }

  render() {
    const { imgs } = this.props;
    const { config } = this.state;
    return (
      <div>
        <Flickity
          className=""
          elementType="div"
          disableImagesLoaded={false}
          reloadOnUpdate
          options={config}
        >
          {imgs && imgs.map((img, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <img key={index} src={img} alt="" />
          ))}
        </Flickity>
        <Container>
          {imgs && <Ribbon src={RibbonShipping} />}
        </Container>
      </div>
    );
  }
}


export default Carousel;
