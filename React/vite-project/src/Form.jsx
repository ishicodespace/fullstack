function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}
export default function Form() {
    return (
        <form action="">
            <input type="text" placeholder="write here" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}