import React from "react";
import {useState} from "react";
import "./App.css";
import {useRef} from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [selectSubject, setSelectSubject] = useState("hindi");
  const [selectGender, setSelectGender] = useState("Male");
  const [address, setAddress] = useState("");
  const obj = {};
  const arr = [obj];
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const addressRef = useRef();
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  function hanldeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleDropDown(e) {
    setSelectSubject(e.target.value);
  }

  function handleRadioBtn(e) {
    setSelectGender(e.target.value);
  }

  function handleAdress(e) {
    setAddress(e.target.value);
  }

  function handleClick() {
    if (firstName == null || firstName == "" || format.test(firstName)) {
      alert("Name Can Not Be Blank!");
    } else if (lastName == null || lastName == "" || format.test(lastName)) {
      alert("LastName Can Not Be Blank!");
    } else if (age < 0 || age == 0) {
      alert("Age is Always Positive!");
    } else if (address == null || address == "") {
      alert("Enter Address Where You Leave");
    } else {
      obj.firstName = firstName;
      obj.lastName = lastName;
      obj.age = age;
      obj.selectSubject = selectSubject;
      obj.selectGender = selectGender;
      obj.address = address;
      console.log(arr);
    }
  }

  function handleReset() {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    ageRef.current.value = 0;
    addressRef.current.value = "";
  }

  return (
    <div className="App">
      <form name="myform">
        <lable>First Name: </lable>
        <input
          type="text"
          id="firstname"
          ref={firstNameRef}
          onChange={hanldeFirstName}
        />
        <br />
        <br />
        <lable>Last Name: </lable>
        <input
          type="text"
          id="lastname"
          ref={lastNameRef}
          onChange={handleLastName}
        />
        <br />
        <br />
        <lable>Age: </lable>
        <input
          type="number"
          id="age"
          ref={ageRef}
          onChange={handleAge}
          min="0"
        />
        <br />
        <br />
        <select id="dorpdown" value={selectSubject} onChange={handleDropDown}>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Compuer Science">Computer Science</option>
          <option value="Applied Machine Learning">
            Applied Machine Learning
          </option>
        </select>

        <br />
        <br />
        <div id="gender" value={selectGender} onChange={handleRadioBtn}>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        <br />
        <br />
        <lable>Address</lable>
        <br />
        <textarea
          id="textArea"
          ref={addressRef}
          onChange={handleAdress}
        ></textarea>
        <br />
        <br />
        <input type="button" value="Submit" onClick={handleClick} />

        <input type="button" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
}

export default App;
