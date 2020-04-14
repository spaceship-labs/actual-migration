import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from 'components/Card';
import {
  Section,
  SectionTitle,
  Number,
  ResultsSection,
  FullWidth,
  FetchingProgress,
} from './index.styled';

const CategorySection = ({ title, data = [], isFetching }) => {
  const n = data.length;
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <ResultsSection>
        <AiOutlineSearch size="24" />
        <Number>{n}</Number>
        Resultados
      </ResultsSection>
      {data.map((product, i) => <Card key={i} {...product} />)}
      <FullWidth>
        {isFetching && <FetchingProgress color="secondary" />}
      </FullWidth>
    </Section>
  );
};


export default CategorySection;
