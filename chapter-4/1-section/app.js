import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.setMaxListeners(2);
//If we have any event which is more then 2 it will give a warning error

emitter.on("abc", () => {
  console.log("abc Event listener 1");
});
emitter.on("x", () => {
  console.log("X Event listener ");
});
emitter.on("y", () => {
  console.log("y Event listener 1 ");
});
emitter.on("y", () => {
  console.log("Y Event listener 2");
});
emitter.on("abc", () => {
  console.log("abc Event listener 5");
});

console.log(emitter);
emitter.emit("abc");

//event.once it will run the event only once even though we have fired it multiples times.
emitter.once("x", () => {
  console.log("x event called");
});

emitter.emit("x");
//X Event listener
//x event called
emitter.emit("x");
//X Event listener

emitter.emit("x");
//X Event listener
