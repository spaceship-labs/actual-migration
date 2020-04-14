import React from 'react';
import TemplateLayout from 'components/Template';
import { ParagraphContainer } from 'components/Template/index.styled';

const PaintMaintanceManualPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Pintura electroestática</h2>
      <h2>Limpieza</h2>
      <ul>
        <li>
          Emplee un trapo suave preferiblemente de color blanco (que no suelte pelusa),
          humedecido no mojado con alcohol antiséptico, industrial o desengrasantes a base
          de alcohol.
        </li>
        <li>Pase el trapo húmedo por la zona a limpiar y enseguida pase el trapo seco.</li>
        <li>
          Siempre que limpie una estructura o pieza tratada con pintura electrostática,
          asegúrese muy bien de secar totalmente la pieza, si deja humedad sobre la
          superficie de la pintura ésta puede deteriorar el acabado y generar oxidación.
        </li>
        <li>
          Cuando limpie o lave los vidrios, paredes o pisos evite que las piezas sean
          cubiertas o salpicadas con líquidos que se contengan agentes solventes y/o
          abrasivos tales como:
        </li>
        <ul>
          <li>Acetonas.</li>
          <li>Disolventes.</li>
          <li>Ácido muriático.</li>
          <li>Tiner.</li>
          <li>Varsol.</li>
          <li>Hipoclorito.</li>
        </ul>
        <li>
          {' '}
          Estos pueden deteriorar el acabado de la pintura, generar desprendimiento
          de la misma y fomentar la aparición de óxido y/o corrosión.
        </li>
        <li>
          No debe utilizar ningún tipo de solventes para mejorar la limpieza, tales como
          thinners, éteres, cetonas o limpiadores abrasivos, para no dañar el recubrimiento.
        </li>
        <li>No lave con agua y jabón.</li>
        <li>No emplee alcohol de origen desconocido o sin marca alguna reconocida.</li>
      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);


export default PaintMaintanceManualPage;
