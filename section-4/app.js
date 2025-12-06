let loadCustomRequire = customRequire("./random.js");
console.log(loadCustomRequire.add(9, 2));
console.log(loadCustomRequire.sub(9, 2));

function customRequire(path) {
  let fs = require("fs");
  let readContent = fs.readFileSync(path).toString();
  // console.log("Reading outside", readContent);
  return (function (send) {
    eval(readContent);
    return send;
  })({});
}
/**
 * This is how the require function work in common.js
 * in node.js every thing is running inside the module wrapper function.
 * The iFFI function is a wrapper function 
 */