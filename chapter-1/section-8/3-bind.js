const user = {
  name: "Ramesh",
  email: "lalrameshda@gmail.com",
  sendEmail() {
    console.log(`sending email from ${this.name}: ${this.email}`);
  },
};

// function deliverMessage(sendingMessage) {
//   console.log("Preparing to send....");
//   sendingMessage();
// }
// deliverMessage(user.sendEmail);
/**
 *  console.log(`sending email from ${this.name}: ${this.email}`);                               
TypeError: Cannot read properties of undefined (reading 'name')
 when we send user.sendEmail as callback the function gets separated from the object.
when deliverMessage calls the callback it call it as regular function
hence undefined

 */
function deliverMessage(sendingMessage) {
  console.log("Preparing to send....");
  sendingMessage();
}
deliverMessage(user.sendEmail.bind(user));
/**
 * Now "this" is permanently locked to the user object, even though the function is called
 * inside deliverMessage
 */
