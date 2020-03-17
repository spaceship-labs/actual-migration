import React from 'react';
import TemplateLayout from '../../components/Template';
import { ParagraphContainer } from '../../components/Template/index.styled';

const AluminiumMaintanceManualPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Aluminios</h2>
      <h2>Limpieza</h2>
      <ul>
        <li>
          La limpieza debe hacerla con un paño suave o de microfibra,
          humedecida en agua tibia.
        </li>
        <li>
          Realice la limpieza siempre siguiendo el sentido las vetas de
          aluminio y nunca en sentido contrario porque puede rayarse,
          limpie con un trapo limpio y seco al final.
        </li>
        <li>
          Cuando desee otorgar brillo a la pieza, humedezca ligeramente
          un paño suave en una preparación de vinagre diluido en agua
          (3 o 4 cucharadas grandes por litro), frota constantemente y,
          finalmente, limpie y seque con un trapo suave y limpio.
        </li>
        <li>
          Si presenta manchas o partículas adheridas bastante difíciles
          de retirar tales como pegamento, debe usar thinner humedecido
          con un trapo y esparciendo con fuerza sobre la mancha retirando
          finalmente con agua y un trapo seco y limpio.
        </li>
        <li>Nunca use productos de limpieza que contengan hipoclorito.</li>
      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);


export default AluminiumMaintanceManualPage;
