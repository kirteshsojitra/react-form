import React from "react";
import {useSearchParams, useLocation, Link} from "react-router-dom";
import App from "./App";

import Login from "./Login";
const Contact = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const showContact = searchParams.get("filter") === "number1";
  const letShowContact = searchParams.get("filter") === "number2";

  return (
    <div>
      <a onClick={() => setSerachParams({filter: "number1"})}>Home</a>
      <br />
      <a onClick={() => setSerachParams({filter: "number2"})}>Office</a>
      <br />

      {showContact ? (
        <h1>6353635353</h1>
      ) : letShowContact ? (
        <h1>5656424213</h1>
      ) : (
        <h1>
          <a href="http://localhost:3000/contact/?filter=number1">Home</a>
          <br />
          <a href="http://localhost:3000/contact/?filter=number2">Office</a>
        </h1>
      )}
    </div>
  );
};

export default Contact;
