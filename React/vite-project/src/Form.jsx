function handleSubmit(event) {
  console.log(event);
  console.log("Form submitted!");
}
export default function Form() {
  return (
    <>
      <form action="">
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
