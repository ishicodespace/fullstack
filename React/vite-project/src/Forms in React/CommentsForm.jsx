import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 6) {
    errors.name = "Must be 6 characters or less";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   name: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      name: "",
      remarks: "",
      rating: 5,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // function handleInputChange(event) {
  //   setFormData((prevData) => {
  //     return {
  //       ...prevData,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   addNewComment(formData);
  //   setFormData({
  //     name: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // }

  return (
    <>
      <h1>Leave a comment!</h1>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        placeholder="enter name"
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <br /> <br />
      <label htmlFor="remarks">Remarks: </label>
      <textarea
        name="remarks"
        id="remarks"
        placeholder="remarks"
        value={formik.values.remarks}
        onChange={formik.handleChange}
      ></textarea>
      <br /> <br />
      <label htmlFor="rating">Rating: </label>
      <input
        name="rating"
        type="number"
        id="rating"
        min={1}
        max={5}
        value={formik.values.rating}
        onChange={formik.handleChange}
      />
      <br /> <br />
      <button type="submit" onClick={formik.handleSubmit}>
        Submit
      </button>
    </>
  );
}
