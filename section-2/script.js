const fs = require("fs");
// fs.writeFileSync is always overwrites the file content.it does not append text.
fs.writeFileSync("./text.txt", "I am learning Node js course. ");
fs.appendFileSync(
  "./text.txt",
  "fs.appendFileSync() will not overwrites the content of the file it append new content"
);
const readingContent = fs.readFileSync("./text.txt");
console.log(readingContent.toString());

//creating new file and writing content in it.
const createNewFile = "creatingFiles.txt";

try {
  fs.writeFileSync(
    createNewFile,
    "Creating new file and writing content in it",
    { flag: "wx" }
  );
  const content = fs.readFileSync(createNewFile);
  console.log(content.toString());
  console.log(
    "Reading file content-",
    "creating new file and adding content in it."
  );
} catch (err) {
  console.log("File already exist.");
}

//renaming a file
setTimeout(() => {
  try {
    fs.renameSync(createNewFile, "renamingFile.txt");
    console.log("File renamed successfully");
  } catch (err) {
    console.log("File already exist");
  }
}, 3000);

//copy a file
fs.copyFileSync(createNewFile, "copyOfCreateFile.txt");

//Delete a file::
setTimeout(() => {
  fs.unlinkSync("./copyOfCreateFile.txt");
  console.log("file removed");
}, 5000);

// creating a folder
fs.mkdirSync("newFolder");
fs.writeFileSync(
  "./newFolder/fileInFolder.txt",
  "Created new Folder and writing a file with flag append",
  { flag: "a" }
);
