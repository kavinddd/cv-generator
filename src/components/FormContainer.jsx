import Form from "./Form";
import "../styles/form-container.css";

export default function FormContainer({
  onChangePersonalInfo,
  onChangeEducationalInfo,
  onChangePraticalInfo,
}) {
  const generalForm = {
    formHeader: "Personal Information",
    formFields: ["First Name", "Last Name", "Email", "Phone Number"],
    inputTypes: ["text", "text", "email", "text"],
    onChangeHandler: onChangePersonalInfo,
  };

  const educationalExperienceForm = {
    formHeader: "Educational Experience",
    formFields: ["School Name", "Title Of Study", "Date"],
    inputTypes: ["text", "text", "date"],
    onChangeHandler: onChangeEducationalInfo,
  };

  const practicalExperienceForm = {
    formHeader: "Practical Experience",
    formFields: [
      "Company Name",
      "Position",
      "Title",
      "Responsibilities",
      "From",
      "To",
    ],
    inputTypes: ["text", "text", "text", "text", "date", "date"],
    onChangeHandler: onChangePraticalInfo,
  };

  return (
    <div className="form-container">
      <Form {...generalForm} />
      <Form {...educationalExperienceForm} />
      <Form {...practicalExperienceForm} />
    </div>
  );
}
