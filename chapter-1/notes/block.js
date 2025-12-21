// run this file blockingNonBlocking.js
const fs = require("fs");
const http = require("http");

console.log("Start Execution");
http
  .createServer((req, res) => {
    console.log("Before Reading.....");
    const dataReading = fs.readFileSync("./text.txt", "utf-8");
    res.end(dataReading);
    console.log(dataReading);
    console.log("After Reading.....");
    console.log("Finish Execution");
  })
  .listen(3000);

console.log("Server listening at http://localhost:3000/");
// Start Execution
// Server listening at http://localhost:3000/
// Before Reading.....
// Hello Reading file.....
// After Reading.....
// Finish Execution