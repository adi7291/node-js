//0,1,2,3,4,5,6,7,8,9,a, b, c, d, e, f
//0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
//the number include 8,9 can be hexadecimal  and decimal it can not be octal.

const num1 = 893;
console.log(parseInt(893, 16)); //2195
console.log(parseInt(893, 10)); //893
console.log(parseInt(0x45a, 10)); //4372
//45A==->4X 16^2 + 5X16^1 + 10X16^0= 1024 + 80 + 10=

function hexaToDecimal(digit, radix = 16) {
  let sum = 0;
  digit.forEach((item, index) => {
    if (typeof item === "string") {
      item = item.toUpperCase().charCodeAt(0) - 55;
    }
    sum += item * Math.pow(radix, digit.length - 1 - index);
  });
  return sum;
}
console.log(hexaToDecimal(["f", "f"]));
console.log(hexaToDecimal([4, 5, "a"]));
console.log(hexaToDecimal([1, "a", 3]));
