function printHello(event) {
  event.preventDefault();
  // Log the event object to the console
  console.log(event);
}
function printBye() {
  console.log("Bye World!");
}
export default function Button() {
  return (
    <div>
      <button onMouseOver={printHello}>Click me</button>
      <p onClick={printBye}>click yo print bye</p>
    </div>
  );
}
