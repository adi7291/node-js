import { rm } from "node:fs/promises";

/**
 * This will remove the directory having files.
 * we need to pass the flag as second option { recursive: true, force: true }
 * if we will not pass it will return a error \
 * without passing flag we can delete a file as we do by unLink.
 */
const dirPath = "./test";
const filePath = "./test.txt";

async function removeDirectory() {
  try {
    await rm(dirPath, { recursive: true, force: true });
    await rm(filePath);
    console.log("Directory having file deleted...");
    console.log("File deleted...");
  } catch (err) {
    console.log("Error:", err.message);
    if (err.code === "ENOENT") {
      console.log("Directory does not exist");
    }
  }
}
removeDirectory();
