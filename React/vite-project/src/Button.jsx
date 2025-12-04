function printHello(event) {
  let p = document.createElement("p");
  p.textContent = "Hello World!";
  document.body.appendChild(p);
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
      <p onClick={printBye}>BYEEE</p>
    </div>
  );
}
