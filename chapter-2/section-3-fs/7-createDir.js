import { mkdir, writeFile } from "node:fs/promises";

/**
 * we can create a directory using mkdir
 * but to create a file in node.js we can use writeFile and appendFile
 * to test this function multiple times::
 * first run  node 7-createDir.js and then run  node  6-removedirectory.js
 *
 */

async function createDir() {
  try {
    await mkdir("./test");
    await writeFile("./test/test.txt", "Hello this is test file");
    console.log("Directory created successfully!!");
  } catch (err) {
    console.log("Error: ", err.message);
    if (err.code === "ENOENT") {
      console.log("File do not exist");
    }
  }
}
createDir();
