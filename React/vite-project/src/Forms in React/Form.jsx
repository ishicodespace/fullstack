// import { useState } from "react";
// //associate a state with each input field to make them controlled components
// //controlled components are those whose value is controlled by react state
// //uncontrolled components are those whose value is controlled by the DOM
// //In controlled components, the value of the input field is always driven by the react state
// //To make an input field a controlled component, we need to set its value attribute to the state variable and update the state variable on every change using the onChange event handler

import { useState } from "react";

// //Two ways to handle multiple input fields in a form
// //1. Separate state and event handler for each input field
// //2. Single state object and common event handler for all input fields
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  //   //event handler for input field changes
  //   // function handleNameChange(event) {
  //   //  setfullName(event.target.value);
  //   // }

  //   //common event handler for all input fields
  function handleInputChange(event) {
    let fieldName = event.target.name;
    let value = event.target.value;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [fieldName]: value,
      };
    });
  }

  function handleSumit(event) {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  }

  return (
    <>
      <form action="">
        <label htmlFor="fullName">Full Name</label>
        <input
          name="fullName"
          id="fullName"
          placeholder="enter full name"
          type="text"
          value={formData["fullName"]}
          onChange={handleInputChange}
        />
        <br /> <br />
        <label htmlFor="username">Username</label>
        <input
          name="userName"
          id="username"
          placeholder="enter username"
          type="text"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <br /> <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          placeholder="enter password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br /> <br />
        <button onClick={handleSumit}>Submit</button>
      </form>
    </>
  );
}
