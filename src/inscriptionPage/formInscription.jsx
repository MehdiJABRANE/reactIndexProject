import React, { useRef, useState } from "react";

const Form = ({ labelLang }) => {
  const inputFirstName = useRef("");
  const inputLastName = useRef("");
  const inputEmail = useRef("");
  const inputCountry = useRef("");
  const inputAcceptConditions = useRef("");

  const [errors, setErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);

  const validateForm = () => {
    setErrors([]);
    const firstNameValue = inputFirstName.current.value;
    const lastNameValue = inputLastName.current.value;
    const emailValue = inputEmail.current.value;
    const countryValue = inputCountry.current.value;
    const acceptConditionsValue = inputAcceptConditions.current.checked;

    if (firstNameValue.trim() === "") {
      inputFirstName.current.style.border = "solid red 1px";
      setErrors((prevErrors) => [
        ...prevErrors,
        { field: `${labelLang.b}`, message: "This field is required." },
      ]);
    }

    if (lastNameValue.trim() === "") {
      inputLastName.current.style.border = "solid red 1px";
      setErrors((prevErrors) => [
        ...prevErrors,
        { field: `${labelLang.a}`, message: "This field is required." },
      ]);
      setIsFormValid(false);
    }

    if (emailValue.trim() === "") {
      inputEmail.current.style.border = "solid red 1px";
      setErrors((prevErrors) => [
        ...prevErrors,
        { field: `${labelLang.c}`, message: "This field is required." },
      ]);
      setIsFormValid(false);
    } else if (
      !emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ) {
      inputEmail.current.style.border = "solid red 1px";
      setErrors((prevErrors) => [
        ...prevErrors,
        { field: `${labelLang.c}`, message: "Invalid e-mail" },
      ]);
      setIsFormValid(false);
    }

    if (countryValue.trim() === "") {
      inputCountry.current.style.border = "solid red 1px";
      setErrors((prevErrors) => [
        ...prevErrors,
        { field: `${labelLang.d}`, message: "Invalid e-mail" },
      ]);
      setIsFormValid(false);
    }

    if (acceptConditionsValue === false) {
      inputAcceptConditions.current.style.border = "solid red 1px";
      setErrors((prevErrors) => [
        ...prevErrors,
        { field: `${labelLang.e}`, message: "This checkbox should be checked" },
      ]);
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if(!isFormValid){
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    {console.log(errors)}
      {errors.length > 0 ? (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "500px" }}
        >
          <strong>Errors</strong>
          <ul>
            {errors.map((error, key) => {
              return (
                <li key={key}>
                  {error.field} : {error.message}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div className="mt-3">
        <div className="form-group" style={{ width: "500px" }}>
          <label>{labelLang.a}</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            ref={inputLastName}
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="form-group" style={{ width: "500px" }}>
          <label>{labelLang.b}</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            ref={inputFirstName}
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="form-group" style={{ width: "500px" }}>
          <label>{labelLang.c}</label>
          <input
            type="email"
            name="email"
            className="form-control"
            ref={inputEmail}
          />
        </div>
      </div>

      <div className="mt-3">
        <div className="form-group" style={{ width: "500px" }}>
          <label>{labelLang.d}</label>
          <select
            className="form-select"
            aria-label="Country Selection"
            ref={inputCountry}
          >
            <option value="">{labelLang.d5}</option>
            <option value="MA">{labelLang.d1}</option>
            <option value="SP">{labelLang.d2}</option>
            <option value="FR">{labelLang.d3}</option>
            <option value="">{labelLang.d4}</option>
          </select>
        </div>
      </div>

      <div className="form-check my-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="acceptConditions"
          ref={inputAcceptConditions}
        />
        <label className="form-check-label" htmlFor="acceptConditions">
          {labelLang.e}
        </label>
      </div>

      <div className="mt-3">
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "500px" }}
        >
          {labelLang.f}
        </button>
      </div>
    </form>
  );
};

export default Form;
