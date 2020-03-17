import React from 'react';
import TemplateLayout from '../components/Template';
import { ParagraphContainer, CenteredContainer } from '../components/Template/index.styled';
import TrusDigicert from '../assets/Footer/trust_brands_digicert.svg';
import TrueKount from '../assets/Footer/trust_brands_kount.svg';
import TrueMcafee from '../assets/Footer/trust_brands_mcafee.svg';
import TrueProsa from '../assets/Footer/trust_brands_prosa.svg';
import TrueWave from '../assets/Footer/trust_brands_trustwave.svg';

const SecureShoppingPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Compra segura</h2>
      <p>
        Es la confianza y tranquilidad que Actual Group brinda a sus clientes al comprar en
        línea, proporcionado por los estándares de alta seguridad al garantizar la integridad
        su información que procesamos. No compartimos la base de datos de clientes con otras
        instituciones.
      </p>
      <h2>PERMANENTE</h2>
      <p>
        Toda transacción es procesada directamente en nuestros servidores, de manera
        redundante con un up-time del 99.999 %.
      </p>
      <h2>ENCRIPTADO</h2>
      <p>
        Cada bit de información es encriptado con SSL para garantizar la integridad de todos
        los datos y las transacciones.
      </p>
      <h2>PROTEGIDO</h2>
      <p>
        Los procesos están avalados por diversas certificaciones y auditorías para garantizar
        que la información se mantenga segura y encriptada.
      </p>
      <h2>PCI-DSS COMPLIANT</h2>
      <p>
        Nuestros estándares de seguridad cubren todos los requerimientos de cumplimiento del
        certificado PCI-DSS para el procesamiento de tarjetas y almacenamiento datos datos
        sensibles.
      </p>
      <h2>INTEGRACIONES SEGURAS</h2>
      <p>
        Al procesar toda transacción desde nuestros servidores certificados, las integraciones
        de nuestros clientes heredan el robusto blindaje de seguridad para procesamiento de tarjetas
        y manejo de datos sensibles.
      </p>
      <h2>TOKENIZACIÓN DE TARJETAS</h2>
      <p>
        Cada tarjeta procesada es encriptada automáticamente en nuestros servidores y convertida
        en un token alfanumérico único que será necesario para para acceder a los datos sensibles
        de la tarjeta y procesar futuros cargos.
      </p>

      <CenteredContainer>
        <img src={TrueWave} height="40" alt="" />
        <img src={TrueProsa} height="40" alt="" />
        <img src={TrueKount} height="40" alt="" />
        <img src={TrueMcafee} height="40" alt="" />
        <img src={TrusDigicert} height="40" alt="" />
      </CenteredContainer>
    </ParagraphContainer>
  </TemplateLayout>
);


export default SecureShoppingPage;
