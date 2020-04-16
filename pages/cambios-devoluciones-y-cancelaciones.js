import React from 'react';
import TemplateLayout from 'components/Template';
import { ParagraphContainer } from 'components/Template/index.styled';

const ChangesAndCancellationsPage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>Cambios, devoluciones y cancelaciones</h2>
      <h2>Cambios y devoluciones:</h2>
      <p>
        Nuestra política de devolución es: Podrá devolver el o los artículo(s) comprado(s) a Actual
        Group por los motivos siguientes:
        <ul>
          <li>Si el artículo presenta defectos de fabricación.</li>
          <li>
            Si existe equivocación en el artículo enviado, conservando la
            envoltura original y sin presentar daño alguno.
          </li>
        </ul>
      </p>
      <p>
        En la recepción de mercancía errónea o dañada se aplicará el cambio físico de la
        misma solo si ésta fue reportada al momento de su entrega, a los siguientes teléfonos:
      </p>
      <p>
        Atención a Clientes a los Celulares: (998) 195 8376 o (998) 195 6839 en los horarios
        de servicio de Lunes – Viernes | 09:00am – 20:30pm horas, Sabado 10:00am a 15:00pm
        o los correos electrónicos clientes@actualg.com o clientes1@actual.com con la
        evidencia adjunta.
      </p>
      <h2>Cancelaciones</h2>
      <p>
        Toda cancelación será sujeta a una validación de autenticidad del cliente con la
        finalidad de verificar sus datos personales protegiendo su compra e integridad.
      </p>
      <p>
        Realizaremos una breve evaluación del motivo o circunstancia de la cancelación,
        así como, del rastreo de los artículos previamente comprados.
      </p>
      <p>
        Verificar si el artículo esta sujeto a cancelación de acuerdo a la política
        consentida por el cliente durante la compra.
      </p>
      <p>En caso de ser necesario se le solicitara documentación adicional.</p>
      <p>
        Podrás efectuar la cancelación total o parcial de una compra hecha a través
        {' '}
        <a href="https://www.ActualHome.com">https://www.ActualHome.com</a>
        ,
        {' '}
        <a href="https://www.ActualStudio.com">https://www.ActualStudio.com</a>
        ,
        {' '}
        <a href="https://www.ActualKids.com">https://www.ActualKids.com</a>
        {' '}

        o Vía telefónica siempre y cuando no se haya enviado la mercancía.
      </p>
      <p>
        Para Actual Group su satisfacción y confianza es lo mas importante,
        agradeceremos que para cancelar se comunique a los siguiente teléfonos:
        (998) 195 8376 o (998) 195 6839 en los horarios de servicio de
        Lunes – Viernes | 09:00 – 20:30 horas, Sabado 10:00am a 15:00pm
      </p>
      <p>
        Si al momento de recibir tu aviso (por cualquier medio antes mencionado)
        la mercancía ya ha sido enviada, te pedimos rechazar la entrega en tu domicilio
        para que el servicio de mensajería nos la devuelva. Al recibir nosotros la mercancía
        de regreso, te haremos el reembolso en la misma forma en que se realizo el pago original;
        exceptuando los gastos de envío.
      </p>
      <p>Referente al reembolso:</p>
      <p>
        Sí tu forma de pago fue depósito bancario o transferencia electrónica, te pedimos que
        al momento de solicitar la cancelación nos proporciones lo siguiente:
      </p>
      <ul>
        <li>Nombre del beneficiario:</li>
        <li>Nombre del Banco</li>
        <li>Numero de cuenta</li>
        <li>CLABE interbancaria:</li>
      </ul>
      <p>
        El reembolso se hará  en la misma forma en que se realizo el pago original; por el
        importe total o parcial del pedido cancelado menos gastos de envío.
      </p>
      <p>
        La operación del reembolso se realizara, tan pronto como, Actual Group recibamos
        la mercancía de regreso dentro de los siguientes 15 días hábiles a la obtención
        de tus datos.
      </p>
      <p>No se harán reembolsos si no contamos con los datos antes mencionados.</p>
      <p>
        En caso de cancelaciones parciales, solo se reembolsará el precio de la
        mercancía y no los gastos de envío.
      </p>
      <p>
        Únicamente se reembolsarán los gastos de envío cuando el motivo de la
        cancelación sea imputable a Actual Group por no tener existencias y/o no
        poder surtir el pedido.
      </p>
      <p>
        Actual Group podrá cancelar un pedido u orden hecha, cuando la forma de
        pago seleccionada fue depósito bancario y/o transferencia electrónica por
        incumplimiento de pago, debido a que, el cliente no realizó el pago
        correspondiente dentro de los 3 días naturales previamente acordado
        durante el proceso de la compra.
      </p>

    </ParagraphContainer>
  </TemplateLayout>
);

export default ChangesAndCancellationsPage;
