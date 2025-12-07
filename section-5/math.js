const num = 100;
export let num2 = 200;
export let num3 = num2 + num;
export default num;
const meta = import.meta;
console.log(meta);

/**
 * [Object: null prototype] {
  dirname: 'C:\\Users\\ram17\\Desktop\\nodeJs-anurag\\section-5',
  filename: 'C:\\Users\\ram17\\Desktop\\nodeJs-anurag\\section-5\\math.js',
  resolve: [Function: resolve],
  url: 'file:///C:/Users/ram17/Desktop/nodeJs-anurag/section-5/math.js'
}
 */

console.log(meta.filename);
/**
 * C:\Users\ram17\Desktop\nodeJs-anurag\section-5\math.js
 */
