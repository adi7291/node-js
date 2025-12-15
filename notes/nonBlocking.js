const fs = require("fs");
const http = require("http");

console.log("Start Execution....");
http
  .createServer((req, res) => {
    console.log("Before Reading....");
    fs.readFile("./text.txt", "utf-8", (err, readContent) => {
      if (err) {
        res.writeHead(500);
        res.end("Error Reading File...");
        return;
      }
      res.end(readContent);
      console.log(readContent);
    });
    console.log("After Reading....");
    console.log("End Execution!!!");
  })
  .listen(3001);
console.log("Server listening to port http://localhost:3001/ ");

// Start Execution....
// Server listening to port http://localhost:3001/
// Before Reading....
// After Reading....
// End Execution!!!
// Hello Reading file.....

/***
 * ============ COMPLETE EXECUTION FLOW ============
 * PHASE 1: INITIAL STARTUP (Synchronous)
 * ==========================================
 * Node js  reads the entire file
 * Require modules(fs,http) - loads module into memory
 * Executes top level synchronous code
 *  Start Execution.....
 * http.createServer()
 * .listen(3001)
 * Server listening to port http://localhost:3001
 * Event loop starts - Node.js waits for events(requests,file operations,timers)
 *
 *  PHASE 2: FIRST HTTP REQUEST (User visits http://localhost:3001)
 * ================================================================
 *
 * http request arrives at server
 * createServer callback is invoked with (req,res)
 * Executes synchronous code in the call back::
 *   Before Reading....
 *   fs.readFile() is called
 * 
 * 
 * subse pehle node js pura file read karta h 
 * uske bad jo bhi module (core module, custom module)ko memory me load karta h
 * uske bad jitne bhi synchronous code h usko execute karta h 
 * uske bad  2 conditions ho sakte hain jaise ki blocking code and non-blocking code aa sakte hain
 *  agar blocking code hai to main thread block hoga aur nes=xt line pe code tub tak nahi jaega jub tak code execute na hua ho.
 * agr non-blocking code h to main thread next line pe jaega aur execution pause nahi karega
 * Event loop always check karega ki any call back is ready or not if callback Queue has result 
 * to event loop moves callback to empty call stack and then we get output of the non-blocking like of code.
 */
