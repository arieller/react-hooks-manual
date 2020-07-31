import React from "react";
import ReactDOM from "react-dom";
import ExampleUseState from "./ExampleUseState";
import ExampleUseMemo from "./ExampleUseMemo";
import ExampleUseRef from "./ExampleUseRef";
import ExampleUseCallback from "./ExampleUseCallback";

ReactDOM.render(
  <React.StrictMode>
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
