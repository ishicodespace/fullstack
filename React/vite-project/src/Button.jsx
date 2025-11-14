function printHello(event) {
    console.log("Hello World!");
    console.log(event);
}
function printBye() {
    console.log("Bye World!");
}
export default function Button() {
    return (
        <div>
            <button onClick={printHello}>
                Click me
            </button>
            <p onClick={printBye}>BYEEE</p>
        </div>
    )
}