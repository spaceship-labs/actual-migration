import React from 'react';
import TemplateLayout from 'components/Template';
import { ParagraphContainer } from 'components/Template/index.styled';

const WeArePage = () => (
  <TemplateLayout>
    <ParagraphContainer>
      <h2>¿Quienes somos?</h2>
      <h2>Nosotros somos Actual</h2>
      <h3>Amamos el diseño y esta es nuestra historia:</h3>
      <ul>
        <li>
          <strong>1990</strong>
          {' '}
          inicio de operaciones con el ensamblaje y venta casa por casa de persianas.
        </li>
        <li>
          <strong>1992</strong>
          {' '}
          apertura de primer tienda (45 m2) de muebles estilo rústico mexicano.
        </li>
        <li>
          <strong>1994</strong>
          {' '}
          traspaso a tienda a la calle Margarita, Cancún.
        </li>
        <li>
          <strong>1995</strong>
          {' '}
          apertura de la segunda sucursal en Av. Bonampack, Cancún.
        </li>
        <li>
          <strong>2001</strong>
          {' '}
          lanzamiento de la marca Actual Decoración (2,500 m2) ubicada en Av. Xcaret,
          donde se integran las dos tiendas anteriores y el corporativo.
        </li>
        <li>
          <strong>2002</strong>
          {' '}
          integración de marcas internacionales al portafolio de productos de la tienda.
        </li>
        <li>
          <strong>2003</strong>
          {' '}
          fundación de Atelier Actual, taller de carpintería y tapicería donde se fabrica
          una parte importante de los productos de la marca, además de ofrecer el servicio
          de muebles sobre diseño.
        </li>
        <li>
          <strong>2006</strong>
          {' '}
          inauguración de la fábrica de cortinas y persianas con la marca Light Touch
        </li>
        <li>
          <strong>2006</strong>
          {' '}
          apertura de sucursal en Playa del Carmen.
        </li>
        <li>
          <strong>2010</strong>
          {' '}
          lanzamiento de la marca Actual Studio, enfocada al segmento joven con muebles modernos,
          esta primer tienda se ubica en Malecón Américas.
        </li>
        <li>
          <strong>2012</strong>
          {' '}
          la tienda de Playa del Carmen se convierte en Actual Studio.
        </li>
        <li>
          <strong>2013</strong>
          {' '}
          inauguración de Actual Studio Mérida, ubicada en Plaza Luxury Place.
        </li>
        <li>
          <strong>2014</strong>
          , Mayo renovación del concepto de la marca Actual Studio con la apertura de la tienda
          ubicada en Pabellón Cumbres, Cancún.
        </li>
        <li>
          Lanzamiento de la nueva marca del grupo; Actual Kids, con productos especialmente
          diseñados para niños de 0 a 12 años.
        </li>
        <li>
          <strong>2014</strong>
          , Septiembre evolución de la división de cortinas, con la finalidad de abarcar todo
          el territorio nacional con una red de distribuidores así como atendiendo la demanda del
          usuario final directamente a través de una plataforma digital con la marca cortinas.com
        </li>
      </ul>

    </ParagraphContainer>
  </TemplateLayout>
);

export default WeArePage;
