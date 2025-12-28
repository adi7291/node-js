//  0,1

//write a function to convert binary to decimal.

function binaryToDecimal(num, radix = 2) {
  let decimal = 0;
  try {
    let str = String(num);
    if (!/^[01]+$/.test(str)) {
      throw new Error("Invalid Binary Number!!!");
    }
    for (let i in str) {
      decimal += str[i] * Math.pow(radix, str.length - 1 - i);
    }
    return decimal;
  } catch (error) {
    return error.message;
  }
}

console.log(binaryToDecimal(1111)); //15
console.log(binaryToDecimal(1)); //1
console.log(binaryToDecimal(10)); //2
console.log(binaryToDecimal(101)); //5
console.log(binaryToDecimal(1001)); //9
console.log(binaryToDecimal("")); //Invalid Binary Number!!!
console.log(binaryToDecimal(null)); //Invalid Binary Number!!!
console.log(binaryToDecimal(undefined)); //Invalid Binary Number!!!
console.log(binaryToDecimal(-101)); //Invalid Binary Number!!!
console.log(binaryToDecimal({})); //Invalid Binary Number!!!
console.log(binaryToDecimal(102)); //Invalid Binary Number!!!
