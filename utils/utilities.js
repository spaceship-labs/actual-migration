const buildProductUrl = ({ Name, ItemCode }) => `/${Name.split(' ').join('-')}/${ItemCode}/`;
const buildProductImageUrl = (image) => `${process.env.cdnUrl}/uploads/products/${image}`;
const buildPrice = (price) => (Math.round(price * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2)


export {
  buildProductUrl,
  buildProductImageUrl,
  buildPrice
};
