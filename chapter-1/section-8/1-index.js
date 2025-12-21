const eventOne = {
  name: "Birthday Event",
  guestList: ["Anil", "Gulchi", "ramesh", "vikash"],
  printGuestList() {
    console.log(`Guest list for ${this.name}: `);
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};
eventOne.printGuestList();
console.log("-------------------------------------");
const eventTwo = {
  name: "Anniversary Event",
  guestList: ["Anil", "Gulchi", "Vikash"],
  printGuestList() {
    console.log(`Guest list for  ${this.name}`);

    this.guestList.forEach(function (guest) {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};
eventTwo.printGuestList();

