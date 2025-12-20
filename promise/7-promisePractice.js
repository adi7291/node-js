console.log("A");
Promise.resolve().then(() => console.log("B"));
console.log("C");
/**
 * A
 * C
 * B
 * Promise.then()==>microtask
 * microtask runs after call stack
 */
//=====================================================
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
/**
 * promise--> microtask
 * timeout--> macrotask
 *
 * microtask has more preference then macrotask
 */
//=====================================================
Promise.resolve("X").then(console.log);
console.log("Y");
/**
 * Y
 * X
 * resolve promise are async
 */
//=====================================================
const p = Promise.resolve(5);
const x = p.then((val) => {
  return val * 2;
});
console.log(x);
/**
 * Promise { <pending> }
 */
//======================================================
const p1 = Promise.resolve(5).then(5 * 3);
console.log(p1);
/**
 * Promise</pending>
 */
//============================================================
console.log(Promise.resolve(10).then(console.log));
/**
 * <pending>
 * 10
 */
//===========================================================
Promise.resolve(10).then((val) => console.log(val * 3));
//30
//===========================================================
Promise.resolve(10)
  .then((val) => {
    val * 3;
  })
  .then(console.log);
/**
 * undefined promise.then is returning undefined
 */
//==============================================================
Promise.resolve(10)
  .then((val) => val * 4)
  .then((val) => console.log(val));
/**
 *40
 */
//================================================================
Promise.resolve()
  .then(() => {
    throw "Error!";
  })
  .catch(console.log);
// Error!
//===============================================================
Promise.reject("Fail")
  .catch(() => "Recovered")
  .then(console.log);
//Recovered
//==============================================================
Promise.all([Promise.resolve(1), Promise.reject("Error"), Promise.resolve(3)])
  .then(console.log)
  .catch(console.log);
//Error ==> if any of the promise fails promise.all() reject.
//===================================================================
Promise.any([Promise.resolve(10), Promise.resolve("A"), Promise.resolve("B")])
  .then(console.log)
  .catch((err) => {
    console.log(err.name);
    console.log(err.errors);
  });
//========================================================================
Promise.any([Promise.reject(10), Promise.resolve("A"), Promise.resolve("B")])
  .then(console.log)
  .catch((err) => {
    console.log(err.name);
    console.log(err.errors);
  });
/***
 * A
 * promise.any() always settles with first settled Promise.and ignores
 * rejection
 */
// =============================================================
Promise.any([Promise.reject(10), Promise.reject("A"), Promise.reject("B")])
  .then(console.log)
  .catch((err) => {
    console.log(err.name);
    console.log(err.errors);
  });
/**
 * If promise .any handles all reject promise it will return AggregateError{
 * name:'AggregateError',
 * errors:[...]}
 * AggregateError
  [ 10, 'A', 'B' ]
 */
//==================================================================
Promise.any([Promise.resolve(10), Promise.resolve("A"), Promise.resolve("B")])
  .then(console.log)
  .catch((err) => {
    console.log(err.name);
    console.log(err.errors);
  });
/**
 * 10
 */
//=================================================================
Promise.race([
  Promise.reject(new Error("Failed!!")),
  Promise.resolve("A"),
  Promise.resolve("B"),
])
  .then(console.log)
  .catch((err) => {
    console.log(err.name);
    console.log(err.errors);
  });
/**
 *
 * Error
 * undefined
 */
//===================================================================
Promise.resolve()
  .then(() => {
    setTimeout(() => console.log("timeout"), 0);
  })
  .then(() => console.log("then"));
/**
 * then
 * timeout
 */
//=================================================================
Promise.race([Promise.reject("Error"), Promise.resolve("Success")])
  .then(console.log)
  .catch(console.log);
/**
 * Error
 */
//=================================================================
Promise.any([Promise.reject("Error"), Promise.resolve("Success")])
  .then(console.log)
  .catch(console.log);
/**
 * success
 */
