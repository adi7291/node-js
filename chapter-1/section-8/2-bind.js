//## The problem bind solve is
/**
 * when we pass a function as callback or assign it to a variable 'this' context can be lost.
 * To permanently set this to a callback or anonyms function we use bind
 * bind() creates a new function where this is locked to a specific object
 */

function greet() {
  console.log(`Hello I am ${this.name}.`);
}
const person1 = { name: "Anil" };
const person2 = { name: "Ramesh" };
const unboundGreet = greet;
// unboundGreet();
/**                              
TypeError: Cannot read properties of undefined (reading 'name')
 */
const boundGreet1 = greet.bind(person1);
boundGreet1();
const boundGreet2 = greet.bind(person2);
boundGreet2();

//NOTE: Bind does not call the function immediately it return the function
//========================================================================
