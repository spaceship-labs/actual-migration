const FooterLinks = [
  {
    title: 'Servicio al cliente',
    links: [
      { linkTitle: 'Facturación', link: '/facturacion' },
      { linkTitle: 'Envío y entrega', link: '/envio-y-entrega' },
      { linkTitle: 'Garantias', link: '/politicas-de-garantia' },
      { linkTitle: 'Cambios, devoluciones y cancelaciones', link: '/cambios-devoluciones-y-cancelaciones' },
      { linkTitle: 'Manual de cuidados y recomendaciones', link: '/manual-de-cuidados-y-recomendaciones' },
    ],
  },
  {
    title: 'Ventas por teléfono',
    sections: [
      {
        subtitle: 'Asistencia en su compra',
        numbers: {
          tel: ['(998) 884 1594'],
          cel: ['(998) 246 3487'],
        },
      },
      {
        subtitle: 'Horario de servicio',
        schedule: [
          {
            day: 'Lunes a viernes:',
            hours: [
              '10:00am - 14:00pm',
              '15:00pm - 19:00pm',
            ],
          },
          {
            day: 'Sabado:',
            hours: ['10:00am - 13:00pm'],
          },
        ],
      },
    ],
  },
  {
    title: 'Envíos en México',
    sections: [
      {
        sectionTitle: 'Ciudades de envío y entrega',
        sectionLink: '/ciudades-de-entrega',
        subtitle: 'Asistencia en envío y entrega',
        numbers: {
          cel: [
            '(998) 195 8376',
            '(998) 195 6839',
          ],
        },
      },
      {
        title: 'Horario de servicio',
        schedule: [
          {
            day: 'Lunes a viernes:',
            hours: ['09:00am - 18:30am'],
          },
        ],
      },
    ],


  },
  {
    title: 'Pagos',
    links: [
      { linkTitle: 'Compra segura', link: '/compra-segura' },
      { linkTitle: 'Formas de pago', link: '/forma-de-pago' },
    ],
  },
  {
    title: 'Mapa del sitio',
    links: [
      {
        linkTitle: 'Arquitectura en sitio', link: '/sitemap',

      },
    ],
  },
  {
    title: '¿Necesitas ayuda?',
    links: [
      { linkTitle: 'Preguntas frecuentes', link: '/preguntas-frecuentes' },
      { linkTitle: 'Contáctanos', link: '/contactanos' },
    ],
  },
  {
    title: '¡Ayúdanos a mejorar!',
    links: [
      { linkTitle: 'Tu opinión nos importa (Sugerencias y quejas)', link: '/sugerencias-y-quejas' },
    ],
  },
  {
    title: 'Acerca de nosotros',
    links: [
      { linkTitle: '¿Quiénes somos?', link: '/quienes-somos' },
      { linkTitle: 'Filosofía', link: '/filosofia' },
      { linkTitle: 'Nuestras marcas', link: '/nuestras-marcas' },
      { linkTitle: 'Tiendas', link: '/nuestras-tiendas' },
    ],
  },
];

export default FooterLinks;
