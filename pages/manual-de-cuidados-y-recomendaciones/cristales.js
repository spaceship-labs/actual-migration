import React from 'react';
import TemplateLayout from '../../components/Template';
import { ParagraphContainer } from '../../components/Template/index.styled';

const CristalsMaintanceManualPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Cristales</h2>
      <h2>Limpieza</h2>
      <ul>
        <li>
          Remueva cualquier depósito de polvo, grasas, manchas y/o suciedad
          inmediatamente rociando una solución de agua jabonosa para suavizar,
          luego limpie con una toalla suave o con un escurridor para vidrios,
          siempre enjuagando con abundante agua.
        </li>
        <li>
          No utilice limpiadores ácidos o alcalinos, ya que éstos pueden
          atacar la superficie del cristal y deteriorarla.
        </li>
        <li>
          Evite que cemento, yeso, varsol, gasolina, peterólep, ácido muriático
          o sulfúrico caigan sobre la superficie del vidrio.
        </li>
        <li>
          Nunca limpie un vidrio y/o espejo en seco, ya que pueden sufrir
          rayaduras debido a las partículas de polvo.
        </li>
        <li>
          No realice la labor de limpieza bajo el sol y/o viento seco, debido a
          que al secarse la superficie con rapidez, se pueden generar rayas leves por fricción.
        </li>
        <li>
          Nunca utilice detergente en polvo ya que sus gránulos abrasivos pueden
          rayar la superficie del cristal.
        </li>
        <li>
          No utilice elementos abrasivos como papel periódico, lija, esponjas
          metálicas, objetos corto punzantes ni telas con partículas de suciedad.
        </li>
        <li>
          Recuerde que un vidrio es susceptible a mancharse si está en contacto
          directo o temporal con productos como: pinturas, adhesivos, alcalinos,
          ácidos, solventes o vapores de los mismos.
        </li>

      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);


export default CristalsMaintanceManualPage;
