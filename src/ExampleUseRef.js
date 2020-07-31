import React, { useRef, useState, useEffect } from "react";

export default () => {
  /*
  useRef - a ref is like state, only it persists between renders and doesnt trigger a re-render. 
  ref will not cause the component to re-render when the ref is changed.
  ref also allows us to reference specific elements from differnt parts of the dom, to manage focus for example.
  we can also store previous values of state in a ref.
  */

  // let's count the render
  const renderCount = useRef(0);

  // let's reference a component, like document element query
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    //increments count stored in ref, independently from state.
    renderCount.current = renderCount.current + 1;
  });

  const [state, setState] = useState("Hello, this is state");

  return (
    <div className="App">
      <h1>useRef</h1>
      <input
        onChange={() =>
          setState((prevState) => `${prevState}, how can I help?`)
        }
        placeholder="change state..."
        ref={inputRef}
      />
      <p>{state}</p>
      <button onClick={focus}>Focus on input</button>
      <p>times rendered: {renderCount.current}</p>
    </div>
  );
};
