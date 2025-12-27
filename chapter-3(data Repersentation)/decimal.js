//0,1,2,3,4,5,6,,7,8,9
// write a function which convert array to number

// we can to it by ParseInt([1,2,3,4].join(''))
//
function convertNumber(arr) {
  sum = 0;
  arr.forEach(
    (digit, index) => (sum += digit * Math.pow(10, arr.length - 1 - index))
  );
  return sum;
}
const result = convertNumber([1, 2, 3, 4]);

console.log(result);
