import { rmdir } from "node:fs/promises";

/**
 * this will remove the directory
 * This will not remove file.
 * if the directory contain any file then it will give error
 * Error:  ENOTEMPTY: directory not empty, rmdir 'C:\Users\ram17\Desktop\nodeJs-anurag\chapter-2\section-3-
fs\test'
* we can remove only empty directories
 * */

const dirPath = "./test";
async function removeDir() {
  try {
    await rmdir(dirPath);
    console.log("Directory removed completely");
  } catch (err) {
    console.log("Error: ", err.message);
    if (err.code === "ENOENT") {
      console.log("File do not exist");
    }
  }
}
removeDir();
