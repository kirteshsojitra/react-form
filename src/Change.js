import {Routes, Route, useRoutes} from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Contact from "./Contact";

const Change = () => {
  const arr = [];

  const getData = (obj) => {
    arr.push(obj);
  };

  const routes = useRoutes([
    {
      path: "/",
      element: <App data={getData} />,
    },
    {
      path: "/login",
      element: <Login sendData={arr} />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return routes;
};

export default Change;
