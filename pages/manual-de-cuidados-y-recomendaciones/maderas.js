import React from 'react';
import TemplateLayout from 'components/Template';
import { ParagraphContainer } from 'components/Template/index.styled';

const WoodMaintanceManualPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Maderas</h2>
      <h2>Limpieza</h2>
      <ul>
        <li>
          Limpie con agua y jabón suave que no contengan agentes abrasivos
          ya que estos dañan el lustre del laminado.
        </li>
        <li>Limpie con trapo húmedo, limpio y de color blanco (que no desprenda pelusas).</li>
        <li>Limpie con trapo húmedo, limpio y de color blanco (que no desprenda pelusas).</li>
      </ul>
      <h2>Para retirar manchas o suciedad persistente</h2>
      <ul>
        <li>
          Pase un trapo húmedo con agua tibia impregnado con un producto de limpieza suave
          por toda la superficie de madera, seguir la dirección de la veta.
        </li>
        <li>Use bicarbonato de sodio diluido en agua, aplíquelo con un trapo suave.</li>
        <li>
          Limpie las superficies con un trapo húmedo repitiendo varias veces hasta eliminar
          todos los residuos.
        </li>
        <li>
          Después de eliminar las manchas y de limpiar todo residuo, seque completamente la
          superficie para lograr una apariencia uniforme.
        </li>
        <li>No use superficies para picar o cortar.</li>
        <li>
          Limpie regularmente el polvo de sus acabados de madera para evitar su acumulación,
          ya que puede hacer perder el brillo a los muebles.
        </li>
        <li>
          No coloque elementos calientes directamente sobre la superficie, sin embargo, si es
          necesario colocarlos debe hacerlo sobre una superficie de madera o
          cerámica como protector.
        </li>
        <li>
          Las superficies de madera son susceptibles a sufrir arañazos, escalladuras, cortes
          y punzonados si éstas entran en contacto directo con los objetos abrasivos, angulares
          cortopunzantes o si son golpeados con éstos mismos.
        </li>
        <li>
          Todos los laminados son fabricados para aplicaciones interiores y no deben ser
          expuestos al sol.
        </li>
      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);


export default WoodMaintanceManualPage;
