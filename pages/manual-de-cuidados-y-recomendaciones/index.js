import React from 'react';
import Link from 'next/link';
import TemplateLayout from '../../components/Template';
import { ParagraphContainer } from '../../components/Template/index.styled';

const MaintanceManualPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Manual de cuidados y recomendaciones</h2>
      <ul>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/aceros">Aceros</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/aluminios">Aluminios</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/cristales">Cristales</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/cromados">Cromados</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/maderas">Maderas</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/pieles">Pieles</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/piezas-plasticas">Piezas Plásticas</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/pintura-electroestatica">Pintura electroestática</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/textiles">Textiles</Link>
        </li>
        <li>
          {' '}
          <Link href="/manual-de-cuidados-y-recomendaciones/vinilos">Vinilos</Link>
        </li>

      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);


export default MaintanceManualPage;
