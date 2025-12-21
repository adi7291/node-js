const promise = new Promise((resolve, reject) => {
  console.log(resolve); //[Function (anonymous)]
  console.log(reject); //[Function (anonymous)]
});

console.log(promise); //Promise { <pending> }


const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Operation successful!");
  }, 2000);
});
// Output: Promise { <pending> }
// After 1 second: Promise { "Operation successful!" }
promise.then((data) => {
  console.log(data);
});
//---------------------------------------------------------
const promise1 = new Promise((res, rej) => {
  let success = true;
  if (success) {
    res("Success!!");
  } else {
    rej("Failure!!");
  }
});

promise1
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
//-----------------------------------------------------------
const pending = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise pending for first 3s");
  }, 3000);
});
console.log("Promise is in Pending state", pending); //Promise { <pending> }

//-----------------------------------------------------------
const success = new Promise((res, rej) => {
  res("Success!!");
});
console.log("Promise resolve called immediately...", success);
//------------------------------------------------------------

// const reject = new Promise((res, rej) => {
//   rej("Promise reject called immediately");
// });
// console.log(reject);
