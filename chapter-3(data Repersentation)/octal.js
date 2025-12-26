//Octal number system
//0,1,2,3,4,5,6,7
// 10==> 1X8^1+ 0X8^0 = 8+0=8
// 12==> 1*8^1+ 2*8^0 = 8+2=10
//237==> 2X 8^2 + 3X8^1 + 7*8^0 = 128+24+7=159

let num1 = 0o237;
// let num2=0O8 SyntaxError: Invalid or unexpected token
let num3 = 0o7;
// let num4=0O9 SyntaxError: Invalid or unexpected token
let num4 = 0o10;
console.log(num1, num3, num4);
// let num5= 0o43569 error
//let num6 =0o458 error
// in programming we can concert any number to octal by 
let num=7654321
console.log(parseInt(num,8))