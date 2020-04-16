const buildProductUrl = (Name, ItemCode) => `/${Name.replace(/\s+|[,\/]/g, "-")}/${ItemCode}/`;
const buildProductImageUrl = (image) => `${process.env.cdnUrl}/uploads/products/${image}`;
const buildPrice = (price) => {
  let roundedPrice = (Math.ceil(price * Math.pow(10, 2)) / Math.pow(10, 2))
  return roundedPrice
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export {
  buildProductUrl,
  buildProductImageUrl,
  buildPrice
};
