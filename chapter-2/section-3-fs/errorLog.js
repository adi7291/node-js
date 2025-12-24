import fs from "fs/promises";

/**
 * we are reading content from file which does not exist.
 * This will return a error.
 * We will write that error in log file
 */

async function createWrite() {
  try {
    const content = await fs.readFile("./file11.txt", "utf-8");
    await writeFile("./errorFile.txt");
  } catch (error) {
    fs.appendFile(
      "./logError.log",
      `${new Date().toLocaleTimeString()}\n\n${error.message}\n\n ${
        error.stack
      }`
    );
    console.log(error);
    console.log(`To see all error got to ./logError.log file`);
  }
}
createWrite();
