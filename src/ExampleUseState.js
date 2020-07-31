import React, { useState } from "react";

export default () => {
  /*
  useState - returns an Array with state and state setter,
  can access prevState by calling a callback in the state setter
  */
  const [state, setState] = useState("Hello, this is state");

  return (
    <div className="App">
      <h1>useState</h1>
      <button
        onClick={() => setState((prevState) => `${prevState}, how can I help?`)}
      >
        Change state using prevState?
      </button>
      <p>{state}</p>
    </div>
  );
};
