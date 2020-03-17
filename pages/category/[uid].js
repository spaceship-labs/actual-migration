import React from 'react';
import { useRouter } from 'next/router';
import TemplateLayout from '../../components/Template';
import Section from '../../components/CategorySection';

const testData = [
  {
    link: 'http://google.com',
    productImage: 'https://via.placeholder.com/300',
    title: 'Sillon Katnn Vouitton',
    beforePrice: 16000,
    afterPrice: 15000,
    includeTax: false,
  },
  {
    link: 'http://google.com',
    productImage: 'https://via.placeholder.com/300',
    discountValue: 15,
    title: 'Sillon Katnn Vouitton',
    beforePrice: 16000,
    afterPrice: 15000,
    includeTax: true,
  },
  {
    link: 'http://google.com',
    productImage: 'https://via.placeholder.com/300',
    discountValue: 15,
    title: 'Sillon Katnn Vouitton',
    beforePrice: 16000,
    afterPrice: 15000,
    includeTax: true,
  },
  {
    link: 'http://google.com',
    productImage: 'https://via.placeholder.com/300',
    discountValue: 15,
    title: 'Sillon Katnn Vouitton',
    beforePrice: 16000,
    afterPrice: 15000,
    includeTax: true,
  }, {
    link: 'http://google.com',
    productImage: 'https://via.placeholder.com/300',
    discountValue: 15,
    title: 'Sillon Katnn Vouitton',
    beforePrice: 16000,
    afterPrice: 15000,
    includeTax: true,
  },
];

const CategoryPage = () => {
  const router = useRouter();
  const { query: { uid = '' } } = router;
  const name = uid.split('-').join(' ');
  return (
    <TemplateLayout>
      <Section title={name} data={testData} isFetching />
    </TemplateLayout>
  );
};

export default CategoryPage;
