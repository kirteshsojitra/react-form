import React from "react";
import {useState} from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [selectSubject, setSelectSubject] = useState("hindi");
  const [selectGender, setSelectGender] = useState("Male");
  const [address, setAddress] = useState("");
  const obj = {};
  const arr = [obj];

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
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;
    obj.selectSubject = selectSubject;
    obj.selectGender = selectGender;
    obj.address = address;
    console.log(arr);
  }

  function handleReset() {
    window.location.reload();
  }

  return (
    <div className="App">
      <form>
        <lable>First Name: </lable>
        <input type="text" id="firstname" onChange={hanldeFirstName} />
        <br />
        <br />
        <lable>Last Name: </lable>
        <input type="text" id="lastname" onChange={handleLastName} />
        <br />
        <br />
        <lable>Age: </lable>
        <input type="number" id="age" onChange={handleAge} min="0" />
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
        <textarea id="textArea" onChange={handleAdress}></textarea>
        <br />
        <br />
        <input type="button" value="Submit" onClick={handleClick} />

        <input type="button" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
}

export default App;
