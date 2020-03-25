import React from 'react';
import TemplateLayout from '../components/Template';
import { ParagraphContainer } from '../components/Template/index.styled';

const TermsAndConditionsPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Términos y condiciones</h2>
      <strong>AH Actual Group, S.A. de C.V. (en adelante “Actual Group”)</strong>
      , con domicilio ubicado en: SM 36, MZ 2, LT 3 entre Av. Xcaret y Coba, Col. Centro,
      C.P. 77500, Cancún, Quintana Roo, México, realiza el tratamiento de sus datos personales
      con las siguientes finalidades primarias:
      <ul>
        <li>Dar trámite y seguimiento a su orden de compra;</li>
        <li>Enviar o entregar los productos o servicios que comercializamos;</li>
        <li>Identificar, verificar y validar sus datos personales;</li>
        <li>Realizar el cargo a su tarjeta de crédito, débito;</li>
        <li>Contactarlo en caso de cualquier duda, aclaración o rectificación;</li>
        <li>Generar nuestra base de datos y actualizar sus datos personales;</li>
        <li>Atender dudas, quejas y sugerencias;</li>
        <li>Conocer su historial de compras, gustos y preferencias; y</li>
        <li>
          Para dar cumplimiento a la legislación aplicable, así como a requerimientos
          de autoridades federales y locales. Adicionalmente, podremos tratar sus datos
          personales con la finalidad secundaria de enviarle promociones y publicidad
          inclusive a través de nuestros proveedores de servicios. Podrá conocer el Aviso
          de Privacidad Integro solicitándolo al siguiente correo electrónico:
          clientes@actualg.com . Usted otorga su consentimiento para el tratamiento y
          transferencia de los datos personales proporcionados, de conformidad con lo
          previsto en el presente Aviso de Privacidad.
        </li>
      </ul>
    </ParagraphContainer>
  </TemplateLayout>
);

export default TermsAndConditionsPage;
