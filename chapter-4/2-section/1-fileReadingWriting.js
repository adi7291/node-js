import fs from "node:fs/promises";

const fileContent = await fs.readFile("./charts.txt", "utf-8");
console.log(fileContent);

// const twoGbContent = await fs.readFile(
//   "D:\\Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS).mp4",
//   "utf-8"
// );
// console.log(twoGbContent);
//If the file size of the chart.txt is more then 2.25Gib it will give a Error
//Range Error: File size is (2443368682) is greater then 2GIB
//RangeError [ERR_FS_FILE_TOO_LARGE]: File size (2948679634) is greater than 2 GiB

// Reading 1gb file
// we will be sudden spike in memory and CPU uses
//time 2.5
//Memory
//CPU -35%
//466MB
const oneGbContent = await fs.readFile("D:\\2.mp4", "utf-8");

fs.writeFile("video.mp4", oneGbContent);
console.log(oneGbContent.byteLength);
