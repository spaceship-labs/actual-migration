import React from 'react';
import TemplateLayout from 'components/Template';
import { ParagraphContainer } from 'components/Template/index.styled';

const SteelMaintanceManualPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Aceros</h2>
      <h2>Limpieza</h2>
      <ul>
        <li>
          Para eliminar huellas y manchas grasosas, debe emplear una pieza de tela suave,
          humedecida en una solución de agua y jabón no abrasivo y sin Hipoclorito.
        </li>
        <li>
          Nunca utilice productos de limpieza que contengan hipoclorito debido a que éste
          agente genera manchas, corrosión y oxidación.
        </li>
        <li>
          No emplee desinfectantes ya que éstos contienen hipoclorito de sodio que puede
          dañar o corroer el acero.
        </li>
        <li>
          Siempre que realice cualquier procedimiento de limpieza este debe hacerse
          limpiando en la dirección de la textura o del pulido de la pieza, nunca en el
          sentido contrario ya que se pueden generar rayones.
        </li>
        <li>
          No utilice detergente en polvo para la limpieza de las superficies ya que las
          micropartículas del agente activo pueden rayarlas.
        </li>
        <li>Utilice un limpia vidrios o vinagre con agua para otorgar brillo a la pieza.</li>
        <li>
          La limpieza debe hacerla con un paño suave o de microfibra ligeramente
          humedecido en agua tibia con un detergente líquido no abrasivo.
        </li>
        <li>
          Limpie el acero inoxidable con regularidad ( cada 15 o 20 días) con un paño
          suave y humedecido o con cualquiera de los productos especiales para la limpieza
          del acero inoxidable disponibles en el mercado.
        </li>
        <li>Debe remover los residuos de adhesivo con agua, alcohol o acetona.</li>
        <li>Siempre que limpie una pieza sequela totalmente con un trapo seco y limpio.</li>
        <li>
          Nunca use utensilios abrasivos tales como: cepillos y esponjas de alambre,
          ya que invaden la pelicula protectora del acero, lo cual favorece la aparición
          de corrosión y óxido.
        </li>
        <li>
          No emplee limpiadores de plata ya que éstos contienen cloruros y ácidos
          fuertes dentro de sus componentes.
        </li>
      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);


export default SteelMaintanceManualPage;
