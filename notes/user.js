//Exporting an object
const user = {
  name: "Ramesh",
  age: 34,
  greet() {
    console.log(`Hello ${this.name}`);
    return null;
  },
};
module.exports = user;
