import { readFile, writeFile, appendFile } from "fs/promises";

// reading file content in current directory.
const readingContent = await readFile("./file1.txt");

//writing file at desktop location
writeFile("C:\\Users\\ram17\\Desktop\\writingFile.txt", readingContent);

//create a file and show the current time (as a clock)
setInterval(() => {
  const time = new Date().toLocaleTimeString();
  writeFile("./clock.txt", time);
}, 500);
