import React from 'react';
import TemplateLayout from 'components/Template';
import { ParagraphContainer } from 'components/Template/index.styled';

const LeatherMaintanceManualPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Pieles</h2>
      <h2>Cuidados</h2>
      <ul>
        <li>Seque totalmente las áreas con un trapo limpio, seco y sin color.</li>
        <li>
          No exponga los tejidos de manera permanente a la luz solar ya que
          podría disminuir la calidad del tejido y desmejorar el color y tonalidad.
        </li>
        <li>
          Por ninguna razón utilice productos de limpieza, suavizantes, blanqueador
          o detergentes abrasivos que contengan ácidos o hipoclorito, pueden manchar,
          decolorar y neutralizar la protección del textil.
        </li>
        <li>No utilice esponjas plásticas, de alambre, cepillos ni discos pulidores.</li>
        <li>No permita que las espumas bajo el tapizado se humedezcan.</li>
        <li>No limpie con solventes como thinner, varsol, acetona, alcohol, ceras o siliconas.</li>
        <li>No retuerza ni frote.</li>
        <li>No cepille.</li>
        <li>No almacene en húmedo.</li>
        <li>No planche.</li>
        <li>No lave con agua.</li>
        <li>Máximo 2 veces al año trate la piel con un producto de limpieza suave.</li>
        <li>Quite el polvo con un paño húmedo sin mojar la piel y sin ejercer presión.</li>
        <li>
          No coloque el mobiliario cerca de fuentes de calor para que no se seque,
          volviendo la piel quebradiza o dura.
        </li>
        <li>
          Humectar cada 2 meses la piel con una crema de uso comercial limpiando
          primero la superficie con un trapo limpio, seco y sin color. Luego aplique
          una cantidad de crema humectante con la mano y deje secar por 10 minutos.
        </li>
      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);


export default LeatherMaintanceManualPage;
