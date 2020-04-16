import React from 'react';
import { useRouter } from 'next/router';
import TemplateLayout from 'components/Template';
import CategorySectionContainer from 'containers/CategorySection';

const CategoryPage = () => {
  const router = useRouter();
  const { query: { uid = '' } } = router;
  const name = uid.split('-').join(' ');
  return (
    <TemplateLayout>
      <CategorySectionContainer />
    </TemplateLayout>
  );
};

export default CategoryPage;
