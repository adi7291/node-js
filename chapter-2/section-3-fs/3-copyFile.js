import fs from "node:fs/promises";

async function copyFile1() {
  try {
    await fs.copyFile("./ErrorLog.log", "./wordCountApp/copiedFile.txt");
    console.log("File copied successfully");
  } catch (error) {
    console.log(error.message);
  }
}

copyFile1();
