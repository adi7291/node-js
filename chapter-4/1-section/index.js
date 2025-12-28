const a = document.querySelector("h1");
a.addEventListener("click", () => {
  console.log("Emitter handler despatch an event(click)");
});
/**
 * h1 is event emitter
 * EventListener=> addEventListener==>a
 * () => {
  console.log("Emitter handler despatch an event(click)");
}   is Event handler
 */
