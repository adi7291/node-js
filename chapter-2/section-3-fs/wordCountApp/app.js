import fs from "fs/promises";
const dynamicFiles = process.argv[2];

const content = await fs.readFile(dynamicFiles, "utf-8");
const wordArray = content.split(/[\W]/).filter((word) => word);
// console.log(wordArray);
const wordCount = {};

wordArray.forEach((word) => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});
const duplicates = Object.fromEntries(
  Object.entries(wordCount).filter(([_, count]) => count > 1)
);

console.log(duplicates);

