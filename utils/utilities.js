const buildProductUrl = ({ Name, ItemCode }) => `/${Name.split(' ').join('-')}/${ItemCode}/`;

export {
  buildProductUrl,
};
