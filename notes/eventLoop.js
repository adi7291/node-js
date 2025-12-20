console.log("start....");

setTimeout(() => {
  console.log("SetTimeOut callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Ressolved");
});
console.log("End!!!");

/**
 * --The event loop continuously  checks whether the call stack is empty and whether there are 
 *     pending task in the callback queue(Loe priority Queue) or microtask Queue(high priority Queue).
 * 
 * Call Stack:: Call stack is a place where Js code executes one line at a time
 * in LIFO(last in first out order)
 */


/**
 * ==When JS Engine Starts executing code, it places it in Call Stack, where each line of code 
 * executes one by one in LIFO(last in first out) order.
 * ==Synchronous code executes immediately and sequentially. If Synchronous blocking code 
 * encountered (like arithmetic and for loop etc..) Call Stack waits for its completion
 * before moving to next line.
 * ==Asynchronous code (like setTimeout(),fs,readFile(),fetch) or Promise.then()
 * is not executed immediately  in the Call Stack. Instead it is handed to Web APIs
 * (in browsers) or OS(in Nodejs) to handle in the background. The Call Stack 
 * continues executing the next line of code without waiting.
 * ==When asynchronous operation completes in background, its callback is placed in
 * either:
 * MICROTASK Queue: For Promises,async,await.
 * CALLBACK Queue : for setTimeout(),setInterval(),fetch,callbacks,I/O operations and
 * DOM events.
 * Event Loop continuously check 
 *  1.If Call Stack is Empty
 *  2.If emo=pty, checks the Microtask Queue and executes all task in it
 *  3.Once the Microtask Queue is empty,checks the Callback Queue and executes one task.
 *  4.After execution repeats the cycle.
 *  
 * 
 */