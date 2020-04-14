import React from 'react';
import { useRouter } from 'next/router';
import TemplateLayout from 'components/Template';
import Product from 'components/Product';

const CategoryPage = () => {
  const router = useRouter();
  const { query: { uid = '' } } = router;
  const name = uid.split('-').join(' ');
  return (
    <TemplateLayout>
      <Product />
      <style jsx global>
        {`
          body {
            font-family: Arial,'Helvetica Neue',Helvetica,sans-serif;
          }
          .whiteBg{
            background-color:#fff;
          }
        `}
      </style>

    </TemplateLayout>
  );
};

export default CategoryPage;
