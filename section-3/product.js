function product(...num) {
  return num.reduce((acc, prod) => acc * prod);
}
// console.log(product(1, 2, 3, 4));
module.exports = product;
