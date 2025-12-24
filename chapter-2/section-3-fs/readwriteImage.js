import fs from "fs/promises";

const readImage = await fs.readFile(
  "C:\\Users\\ram17\\Desktop\\Screenshot 2025-12-15 105954.png"
);

const writeImage = await fs.writeFile("./writeImage.png", readImage);
console.log(writeImage);
