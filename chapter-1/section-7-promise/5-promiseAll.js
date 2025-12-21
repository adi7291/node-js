const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise-1 resolved in 1 sec");
  }, 1000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise-2 resolved in 2 sec");
  }, 2000);
});
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise-3 resolved in 3 sec");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
    console.log("All Promise resolved");
  })
  .catch((err) => console.log("Err", err));
// [
//   'Promise-1 resolved in 1 sec',
//   'Promise-2 resolved in 2 sec',
//   'Promise-3 resolved in 3 sec'
// ]
// All Promise resolved

const promise4 = new Promise((res, rej) => {
  let success = false;
  if (success) {
    res("Promise resolved successfully!!");
  } else {
    rej("Promise Rejected");
  }
});
// Promise.all() return result if all promises are resolved if any of them is rejected it will
// be rejected
Promise.all([promise1, promise3, promise4])
  .then((result) => console.log(result))
  .catch((err) => console.log("All promise rejected:", err));
//All promise rejected: Promise Rejected

//-----------------------------------------------------------
//allSettled return status of each promise with result
Promise.allSettled([promise2, promise4]).then((result) => {
  console.log(result);
});

// [
//   { status: 'fulfilled', value: 'Promise-2 resolved in 2 sec' },
//   { status: 'rejected', reason: 'Promise Rejected' }
// ]
//-------------------------------------------------------------------
//Promise.race() will result to whichever first promise wins...
Promise.race([promise2, promise3, promise1]).then((result) =>
  console.log("Promise .race()", result)
);
//Promise .race() Promise-1 resolved in 1 sec
//--------------------------------------------------------------------
//promise.any() result to first fulfilled promise only ignores rejections . The main difference btwn .race() and .any() is promise.race() result to
// first settled promise weather it is rejected or fulfilled.
//but promise.any() always first success promise by ignoring rejections.
