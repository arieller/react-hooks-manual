import React from "react";
import ReactDOM from "react-dom";
import ExampleUseState from "./ExampleUseState";
import ExampleUseMemo from "./ExampleUseMemo";
import ExampleUseRef from "./ExampleUseRef";
import ExampleUseCallback from "./ExampleUseCallback";
import ExampleUseContext from "./ExampleUseContext/ExampleUseContext";
import ExampleUseReducer from "./ExampleUseReducer";

ReactDOM.render(
  <React.StrictMode>
    <ExampleUseReducer />
    <hr />
    <ExampleUseContext />
    <hr />
    <ExampleUseState />
    <hr />
    <ExampleUseMemo />
    <hr />
    <ExampleUseRef />
    <hr />
    <ExampleUseCallback />
  </React.StrictMode>,
  document.getElementById("root")
);
