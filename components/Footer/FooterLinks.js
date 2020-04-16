const FooterLinks = [
  {
    id: 'footer@clientService',
    title: 'Servicio al cliente',
    links: [
      { id: 'clientService-1', linkTitle: 'Facturación', link: '/facturacion' },
      { id: 'clientService-2', linkTitle: 'Envío y entrega', link: '/envio-y-entrega' },
      { id: 'clientService-3', linkTitle: 'Garantias', link: '/politicas-de-garantia' },
      { id: 'clientService-4', linkTitle: 'Cambios, devoluciones y cancelaciones', link: '/cambios-devoluciones-y-cancelaciones' },
      { id: 'clientService-5', linkTitle: 'Manual de cuidados y recomendaciones', link: '/manual-de-cuidados-y-recomendaciones' },
    ],
  },
  {
    id: 'footer@phoneSales',
    title: 'Ventas por teléfono',
    sections: [
      {
        id: 'phoneSales-1',
        subtitle: 'Asistencia en su compra',
        numbers: {
          tel: [{ id: 'phoneSales-1-1', number: '(998) 884 1594' }],
          cel: [{ id: 'phoneSales-1-2', number: '(998) 246 3487' }],
        },
      },
      {
        id: 'phoneSales-2',
        subtitle: 'Horario de servicio',
        schedule: [
          {
            id: 'phoneSales-2-1',
            day: 'Lunes a viernes:',
            hours: [
              { id: 'phoneSales-2-1-1', hour: '10:00am - 14:00pm' },
              { id: 'phoneSales-2-1-2', hour: '15:00pm - 19:00pm' },
            ],
          },
          {
            id: 'phoneSales-2-2',
            day: 'Sabado:',
            hours: [
              { id: 'phoneSales-2-2-1', hour: '10:00am - 13:00pm' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'footer@shippingMexico',
    title: 'Envíos en México',
    sections: [
      {
        id: 'shippingMexico-1',
        sectionTitle: 'Ciudades de envío y entrega',
        sectionLink: '/ciudades-de-entrega',
        subtitle: 'Asistencia en envío y entrega',
        numbers: {
          cel: [
            { id: 'shippingMexico-1-1', number: '(998) 195 8376' },
            { id: 'shippingMexico-1-2', number: '(998) 195 6839' },
          ],
        },
      },
      {
        id: 'shippingMexico-2',
        subtitle: 'Horario de servicio',
        schedule: [
          {
            id: 'shippingMexico-2-1',
            day: 'Lunes a viernes:',
            hours: [{ id: 'shippingMexico-2-1-1', hour: '09:00am - 18:30am' }],
          },
        ],
      },
    ],


  },
  {
    id: 'footer@payments',
    title: 'Pagos',
    links: [
      { id: 'payments-1', linkTitle: 'Compra segura', link: '/compra-segura' },
      { id: 'payments-2', linkTitle: 'Formas de pago', link: '/forma-de-pago' },
    ],
  },
  {
    id: 'footer@siteMap',
    title: 'Mapa del sitio',
    links: [
      {
        id: 'siteMap-1', linkTitle: 'Arquitectura en sitio', link: '/sitemap',
      },
    ],
  },
  {
    id: 'footer@help',
    title: '¿Necesitas ayuda?',
    links: [
      { id: 'help-1', linkTitle: 'Preguntas frecuentes', link: '/preguntas-frecuentes' },
      { id: 'help-2', linkTitle: 'Contáctanos', link: '/contactanos' },
    ],
  },
  {
    id: 'footer@survey',
    title: '¡Ayúdanos a mejorar!',
    links: [
      { id: 'survey-1', linkTitle: 'Tu opinión nos importa (Sugerencias y quejas)', link: '/sugerencias-y-quejas' },
    ],
  },
  {
    id: 'footer@aboutUs',
    title: 'Acerca de nosotros',
    links: [
      { id: 'aboutUs-1', linkTitle: '¿Quiénes somos?', link: '/quienes-somos' },
      { id: 'aboutUs-2', linkTitle: 'Filosofía', link: '/filosofia' },
      { id: 'aboutUs-3', linkTitle: 'Nuestras marcas', link: '/nuestras-marcas' },
      { id: 'aboutUs-4', linkTitle: 'Tiendas', link: '/nuestras-tiendas' },
    ],
  },
];

export default FooterLinks;
