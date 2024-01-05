import { Fragment, useState } from "react";
import "../styles/form.css";

export default function Form({ formHeader, formFields, inputTypes, onChangeHandler }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSaved(!isSaved);
  }

  const fieldList = formFields.map((fieldName, index) => {
    // used for label following input best practice
    const formId = transformToId(fieldName);

    // used for referencing in object
    const formName = transformToName(fieldName);

    return (
      <Fragment key={formId}>
        <label htmlFor={formId}>{fieldName}</label>
        <input
          id={formId}
          name={formName}
          type={inputTypes[index]}
          disabled={isSaved}
          onChange={onChangeHandler}
        ></input>
      </Fragment>
    );
  });

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-header">{formHeader}</div>
      <div className="form-control">
        {fieldList}
        <button type="submit">{isSaved ? "Edit" : "Save"}</button>
      </div>
    </form>
  );
}

function transformToId(formField) {
  return formField.replace(" ", "").toLowerCase();
}

function transformToName(formField) {
  const listString = formField.split(" ").map((string, index) => {
    if (index == 0) {
      return string.toLowerCase();
    }

    return string;
  });

  const name = listString.join("");

  return name;
}
