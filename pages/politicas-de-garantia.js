import React from 'react';
import TemplateLayout from '../components/Template';
import { ParagraphContainer } from '../components/Template/index.styled';

const WarrantyPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>GARANTÍAS</h2>
      <h2>Condiciones Generales</h2>
      <p>
        En correspondencia a lo dispuesto en el articulo 77 de la Ley Federal de
        Protección al Consumidor.
      </p>
      <p>
        La garantía cubre la reparación de la(s) partes(s) afectada(s) en el periodo de garantía
        mencionado en el comprobante de compra.
      </p>
      <p>
        Para hacer valida la garantía, el cliente debe levantar un reporte vía correo electrónico a
        clientes@actualg.com y/o clientes1@actualg.com o a través de nuestro departamento de
        atención a clientes a los siguientes celulares: (998) 195 8376 o (998) 195 6839 en los
      </p>
      <p>Horarios de servicio:</p>
      <p>Lunes – Viernes | 09:00am – 20:30pm horas, Sabado 10:00am a 15:00pm.</p>
      <p>
        La empresa realizará una visita técnica o pedirá evidencia fotográfica para emitir un
        diagnostico que determine la procedencia o improcedencia de la garantía.
      </p>
      <p>El tiempo máximo de respuesta de seguimiento es de 48 horas hábiles.</p>
      <p>El tiempo máximo de resolución dependerá de cada caso.</p>
      <p>
        Manual de cuidados:
        {' '}
        <a href="https://actualstudio.com/manual-de-cuidados-y-recomendaciones">
          https://actualstudio.com/manual-de-cuidados-y-recomendaciones
        </a>
      </p>
      <h2>Exclusiones de garantía:</h2>
      <p>Uso comercial o distinto al uso residencial.</p>
      <p>Limpieza o mantenimiento inexistente o mal efectuado.</p>
      <p>Manipulación por personal no autorizado.</p>
      <p>Exposición a condiciones atmosféricas y/o ambientales no recomendadas.</p>
      <p>Mal uso.</p>

    </ParagraphContainer>
  </TemplateLayout>
);

export default WarrantyPage;
