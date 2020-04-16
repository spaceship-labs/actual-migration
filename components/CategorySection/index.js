import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from 'components/Card';
import Loader from 'components/Loader'
import {
  Section,
  SectionTitle,
  Number,
  ResultsSection,
} from './index.styled';

class CategorySection extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
  onScroll() {
    const { products, total, fetchProducts } = this.props;
    const heightForFetching = window.innerHeight > window.innerWidth ? 1600 : 700;
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - heightForFetching)) {
      if (products.length < total) {
        fetchProducts();
      }
    }
  }
  render() {
    const {
      title,
      products = [],
      total = 0,
      isFetching = false
    } = this.props;
    return (
      <Section>
        <SectionTitle>{title}</SectionTitle>
        <ResultsSection>
          <AiOutlineSearch size="24" />
          <Number>{total}</Number>
          Resultados
        </ResultsSection>
        {products.map((product, i) => <Card key={i} {...product} />)}
        {isFetching ? <Loader /> : ''}
      </Section>
    );
  };
}



export default CategorySection;
