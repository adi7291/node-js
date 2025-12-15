const user = require("./user");
const fs = require("fs");
// console.log(user.greet());

//Blocking operation or synchronous operation

function blockingOperations() {
  console.log("Starting task.....");
  let sum = 0;
  for (let i = 0; i <= 1000000000; i++) {
    sum += i;
  }
  console.log("Task finished!!");
  return sum;
}
console.log("Before Execution...");
let result = blockingOperations();
console.log("After function Execution....");
console.log("Result", result);

// console.log('first statement')
// const readingContent = fs.readFileSync('./user.js','utf-8')
// console.log('Reading file content',readingContent);
// console.log('second statement')
// console.log('third statement')

//Non-Blocking operation or asynchronous operation
function nonBlockingOperations() {
  console.log("Starting Task....");
  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i <= 100000000; i++) {
      sum += i;
    }
    console.log("Task Finished!!!!");
    console.log("Result", sum);
  }, 0);
}
console.log("Before Function Execution...");
nonBlockingOperations();
console.log("After Function Execution....");

// console.log("first statement");
// fs.readFile("./user.js", "utf-8", (err, readingContent) => {
//   console.log("Reading file content", readingContent);
// });

// console.log("second statement");
// console.log("third statement");
