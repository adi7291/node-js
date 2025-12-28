import fs from "node:fs";

console.time("readStream");
const readStream = fs.createReadStream(
  "D:\\Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS).mp4",
  {
    highWaterMark: 600 * 1024 * 1024,
  }
);
let readStreamCount = 0;
//highWaterMark is used to set the KB,MB of data read by each chunk
readStream.on("data", (chunk) => {
  console.log("reading streams....");
  fs.appendFileSync("largeVideo.mp4", chunk);
  readStreamCount++;
});

readStream.on("end", () => {
  console.log({ readStreamCount });
  console.timeEnd("readStream");
});

//reading byte of data from file charts.txt
console.time();
const readStream64Byte = fs.createReadStream("charts.txt", {
  highWaterMark: 8,
});
let readCount = 0;
// will read 16byte of chunk 4 times
readStream64Byte.on("data", (data) => {
  console.log(data.byteLength);
  readCount++;
});
readStream64Byte.on("end", () => {
  console.log({ readCount });
  console.timeEnd();
});
