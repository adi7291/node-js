const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise will get resolve after 3 sec");
  }, 3000);
});
console.log(
  "Promise will be pending for first 3s and then will get resolve==>",
  promise
);
console.log("ramesh");
promise.then((data) => {
  console.log(data);
});
//--------------------------------------------------------------------

let promise1 = new Promise((res, rej) => {
  let success = false;
  if (success) {
    res("Promise resolved immediately");
  } else {
    rej("Promise reject immediately");
  }
});
promise1
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done!!"));
//--------------------------------------------------------------------

const success = new Promise((res, rej) => {
  res("Promise resolved immediately with success");
});
console.log(success);
//---------------------------------------------------------------------
const pending = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Promise  will be in pending");
  }, 0);
});
console.log(pending);
//--------------------------------------------------------------------
const reject = new Promise((res, rej) => {
  rej("Promise Rejected immediately with error");
});
console.log(reject);

//ORDER OF THE OUTPUT
// Promise will be pending for first 3s and then will get resolve==> Promise { <pending> }
// ramesh
// Promise { 'Promise resolved immediately with success' }
// Promise { <pending> }
// Promise { <rejected> 'Promise Rejected immediately with error' }
// Promise reject immediately
// Done!!
// node:internal/process/promises:289
//             triggerUncaughtException(err, true /* fromPromise */);
//             ^

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function
// without a catch block, or by rejecting a promise which was not handled with .catch(). The promise
//  rejected with the reason "Promise Rejected immediately with error".] {
//   code: 'ERR_UNHANDLED_REJECTION'
// }
