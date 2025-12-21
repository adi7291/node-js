function add(...num) {
  return num.reduce((acc, add) => {
    return acc + add;
  });
}

// console.log(add(1, 2, 3, 4));

console.log((module.exports));
module.exports = add;
