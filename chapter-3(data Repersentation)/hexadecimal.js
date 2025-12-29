//0,1,2,3,4,5,6,7,8,9,a, b, c, d, e, f
//0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
//the number include 8,9 can be hexadecimal  and decimal it can not be octal.

// const num1 = 893;
// console.log(parseInt(893, 16)); //2195
// console.log(parseInt(893, 10)); //893
// console.log(parseInt(0x45a, 10)); //1114
//45A==->4X 16^2 + 5X16^1 + 10X16^0= 1024 + 80 + 10=

function hexaToDecimal(digits, radix = 16) {
  let sum = 0;
  try {
    if (!Array.isArray(digits) || digits.length === 0) {
      throw new Error("Input must be non Empty Array!!");
    }

    for (let i = 0; i < digits.length; i++) {
      let value = digits[i];
      // handle string values
      if (typeof value === "string") {
        if (!/^[0-9A-Fa-f]$/.test(value)) {
          throw new Error(`Invalid hex digit ${value}`);
        }
        value = isNaN(value)
          ? value.toUpperCase().charCodeAt(0) - 55
          : Number(value);
      }
      // handle non-number
      if (typeof value !== "number" || value < 0 || value >= radix) {
        throw new Error(`Invalid hex digits ${value}`);
      }
      sum += value * Math.pow(radix, digits.length - 1 - i);
    }
    return sum;
  } catch (error) {
    return error.message;
  }
}
console.log(hexaToDecimal(["f", "f"]));
console.log(hexaToDecimal([4, 5, "a"]));
console.log(hexaToDecimal([1, "a", 3]));
console.log(hexaToDecimal(["G"]));
console.log(hexaToDecimal([9, 16]));
console.log(hexaToDecimal([1, null, "A"]));
console.log(hexaToDecimal([9, {}]));
