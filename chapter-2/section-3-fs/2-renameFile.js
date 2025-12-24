import { rename } from "node:fs/promises";
//renaming a file
async function renameFile() {
  try {
    await rename("./logError.log", "./ErrorLog.log");
    console.log("file renamed successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
}
renameFile();
//copying a file
