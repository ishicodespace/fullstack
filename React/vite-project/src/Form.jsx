function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log("Form submitted!");
}
export default function Form() {
  return (
    <>
      <form action="">
        <input type="text" />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
