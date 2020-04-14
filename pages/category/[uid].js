import React from 'react';
import { useRouter } from 'next/router';
import TemplateLayout from 'components/Template';
import Section from 'components/CategorySection';

const testData = [
  {
    ItemCode: 'ST2018',
    icon_filename: 'ST10017_01_Cama_capitonada_Queen_size_beige.jpg',
    ItemName: 'Sillon Katnn Vouitton',
    Price: 16000,
    DiscountPrice: 15000,
    includeTax: false,
  },
  {
    ItemCode: 'ST2018',
    icon_filename: 'ST10017_01_Cama_capitonada_Queen_size_beige.jpg',
    ItemName: 'Sillon Katnn Vouitton',
    Price: 16000,
    DiscountPrice: 15000,
    Discount: 15,
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
