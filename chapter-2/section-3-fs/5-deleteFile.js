import { unlink } from "node:fs/promises";
// to run this function first we need to create a file names as deleteFile.txt
const filePath = "./deleteFile.txt";
async function deleteFile() {
  try {
    await unlink(filePath);
    console.log(`File deleted successfully: ${filePath}`);
  } catch (err) {
    console.log("Error: ", err.message);
    if (err.code === "ENOENT") {
      console.log("File does not exist.");
    }
  }
}
deleteFile();
