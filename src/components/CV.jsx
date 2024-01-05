import "../styles/cv.css";

export default function CV({
  personalInformation,
  educationalInformation,
  practicalInformation,
}) {

    const { firstName, lastName, email, phoneNumber } = personalInformation;
    const { schoolName, titleOfStudy, date } = educationalInformation;
    const { companyName, position, title, responsibilities,from, to } = practicalInformation;

    const formattedDate = formatDate(date);
    const formattedFrom = formatDate(from);
    const formattedTo = formatDate(to);

  return (
    <div className="generated-csv">
      <div className="personal-information">
        <p className="fullname"> {firstName + " " + lastName}</p>
        <span className="email"> {email} </span>
        <span className="phone-number"> {phoneNumber} </span>
      </div>
      <div className="educational-information">
        <p className="cv-header"> Education </p>
        <span className="school-name"> {schoolName} </span>
        <span className="title-study"> {titleOfStudy} </span>
        <span className="date"> {formattedDate} </span>
      </div>
      <div className="practical-information">
        <p className="cv-header"> Working Experiences</p>
        <span className="company-name"> {companyName} </span>
        <span className="position"> {position} </span>
        <span className="title"> {title} </span>
        <ul className="responsibilities">
          {responsibilities.map( rp => <li key={rp.toLowerCase()}> {rp}</li>)}
        </ul>
        <span className="duration"> {formattedFrom}-{formattedTo}</span>
      </div>
    </div>
  );
}

// 2023-01-23 to 01/2023
function formatDate(date) {
  console.log(date);
  const dateList = date.split("-")
  return dateList[1] + "/" + dateList[0];
}
