const calculator = {
  value: 10,
  name: "MyCalculator",

  add(num) {
    this.value += num;
    console.log(`${this.name} now has value: ${this.value}`);
  },
};

// calculator.add(2);
const addMethod = calculator.add.bind(calculator);
addMethod(2);
addMethod(9);
addMethod(5);
