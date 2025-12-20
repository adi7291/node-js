import fs from "fs/promises";

async function readFileIfFileNotExist(fileName) {
  if (!fileName.endsWith(".txt")) {
    throw new Error("Invalid File Type");
  }
  try {
    return await fs.readFile(fileName, "utf-8");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("File dost Not exist");
    }
  }
}
readFileIfFileNotExist("./add.txt")
  .then((data) => console.log("File Content:", data))
  .catch((error) => console.log("Error Found:", error.message));
//Error Found: File dostNot exist
readFileIfFileNotExist("./note.txt")
  .then((data) => console.log("readFileIfFileNotExist function", data))
  .catch((error) => console.log("Error Found:", error.message));
//readFileIfFileNotExist function "Hello this is ramesh."

readFileIfFileNotExist("./note.tt")
  .then((data) => console.log("readFileIfFileNotExist function", data))
  .catch((error) => console.log("Error Found:", error.message));
//Error Found: Invalid File Type
