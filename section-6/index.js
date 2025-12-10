// import { num } from "./customPackage.js";
import { num } from "number";
/**
 * we will gat this error:::
 * throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'custom_package' imported from C:\Users\ram17\Deskto
p\nodeJs-anurag\section-6\index.js
 */

/**
 * but if we create a node_modules folder and inside that we will make a folder number
 * and inside that we will create a file package.json and custom_package.js where we will have all the code mee need to execute
 *now we can export that content to index.js or app.js.
    Each package should have there package.json 

 */
console.log(num);
