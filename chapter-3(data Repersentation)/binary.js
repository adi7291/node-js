//  0,1

//write a function to convert binary to decimal.

function binaryToDecimal(num, radix = 2) {
  let str = num.toString();
  let decimal = 0;
  for (let i in str) {
    decimal += str[i] * Math.pow(radix, str.length - 1 - i);
  }
  return decimal;
}
console.log(binaryToDecimal(1111)); //15
console.log(binaryToDecimal(1)); //1
console.log(binaryToDecimal(10)); //2
console.log(binaryToDecimal(101)); //5
console.log(binaryToDecimal(1001)); //9
