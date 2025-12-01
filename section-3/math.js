function product(...num) {
  return num.reduce((acc, prod) => acc * prod);
}

function add(...num) {
  return num.reduce((acc, add) => {
    return acc + add;
  });
}

module.exports = {
  add,
  product,
};
