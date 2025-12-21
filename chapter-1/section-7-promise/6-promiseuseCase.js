function fetchWithTimeOut(url, timeOut) {
  const fetchPromise = fetch(url);
  console.log("fetch data", fetchPromise);
  const timeoutPromise = new Promise((_, rej) => {
    setTimeout(() => {
      rej("Request Timeout!!!");
    }, timeOut);
  });
  return Promise.race([fetchPromise, timeoutPromise]);
}
// fetchWithTimeOut("https://jsonplaceholder.typicode.com/posts/1", 3000)
//   .then((data) => console.log("Got Response!!!", data))
//   .catch((err) => console.log(err));
// fetchWithTimeOut("https://api.example.com/data", 3000)
//   .then((response) => console.log("Got response"))
//   .catch((error) => console.log(error));

let promise = Promise.resolve(5);
console.log(promise);
let val = promise.then((data) => console.log(data));
val.then((data) => console.log(data * 2));
console.log(val);
let promise1 = Promise.reject(4);
let val1 = promise1.catch((data) => console.log(data));

console.log(val1);
