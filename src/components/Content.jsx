import { useState } from "react";
import CV from "./CV";
import FormContainer from "./FormContainer";
import "../styles/content.css";

export default function Content() {

    // these data must be send to CV to render generated-cv
    // is first set with default values
    const [personalInformation, setPersonalInformation] = useState({
        firstName:   "Firstname",
        lastName:    "Lastname",
        email:       "youremail@domain.com",
        phoneNumber: "092-503-2035"
    });

    const [educationalInformation, setEducationalInformation] = useState({
        schoolName:   "Hogward University",
        titleOfStudy: "Bachelor of Magic",
        date:         "2021-09-12"
    });

    const [practicalInformation, setPracticalInformation] = useState({
        companyName: "Meta",
        position:    "Junior",
        title:       "Web Developer",
        responsibilities: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, quas, porro tenetur sunt similique iure quasi"  ,
            "tempora ipsam ipsa modi, in quidem amet cumque ab quo reiciendis et pariatur!"
            ],
        from:        "2020-08-01",
        to:          "2022-12-25"
    })

    // these event handler must be send through form
    function handleOnChangePersonalInfo(e) {
        const {name, value} = e.target;
        setPersonalInformation({
            ...personalInformation, 
            [name]: value
        });
    }
    function handleOnChangeEducationalInfo(e) {
        const {name, value} = e.target;
        setEducationalInformation({
            ...educationalInformation,
            [name]: value
        });
    }

    function handleOnChangePraticalInfo(e) {
        let {name, value} = e.target;

        if (name === "responsibilities") {
            value = value.split(",");
            console.log(value);
        }

        setPracticalInformation({
            ...practicalInformation, 
            [name]: value
        });
    }


    return (
        <div className="content">
             <FormContainer 
                onChangePersonalInfo={handleOnChangePersonalInfo}
                onChangeEducationalInfo={handleOnChangeEducationalInfo}
                onChangePraticalInfo={handleOnChangePraticalInfo}
             />
            <div className="generated-cv-container">
                 <CV
                    personalInformation = {personalInformation}
                    educationalInformation = {educationalInformation}
                    practicalInformation = {practicalInformation}
                 />
            </div>
        </div>
    )
}