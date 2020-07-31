import React from "react";
import ContextFunctionComponent from "./ContextFunctionComponent";
import ContextClassComponent from "./ContextClassComponent";

import { ThemeProvider } from "./ThemeContext";

export const ThemeContext = React.createContext();

export default () => {
  /*
  useContext - Context is used to pass props/values down to all children.
  useContext returns a Consumer and Provider components,
  using these components we can Provider and Consume values.

  usage for Class based components and functional components are different,
  in class based we need to wrap the returned component with the Consumer component,
  in a functional component we need to use useContext. (much simpler then class based)
  */

  return (
    <div className="App">
      <ThemeProvider>
        <h1>useContext</h1>
        <ContextFunctionComponent />
        {/* <ContextClassComponent /> */}
      </ThemeProvider>
    </div>
  );
};
