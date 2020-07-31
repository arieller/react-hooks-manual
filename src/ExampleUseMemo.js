import React, { useState, useMemo, useEffect } from "react";

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default () => {
  /*
  useMemo - allows us to memoize components, and prevent re-renders if the general state changes didn't affect the memoized components.
  
  typical usage: 
  1. if you need to render a component after a very slow function is being called (which has no direct relation to the memoized component)
  2. prevent object recreation when state changes due to referential inequality, by memoizing the object and adding it as a dependecy to the memoized component.
     this allows us to update the memoized component only when the actual object did change, and not just due to referential inequality.

  Memoizing the wrong components will actually impact performance, because it takes space in memory.
  */
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeObject = useMemo(() => {
    return {
      width: "400px",
      height: "100px",
      padding: "10px",
      backgroundColor: dark ? "#000" : "#fff",
      color: dark ? "#fff" : "#000",
    };
  }, [dark]); // useMemo will change the object only if the dark state variable will change, if some other part of the state changes, memo will not create a new object and will use the existing reference.

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeObject]); //without memoization, themeObject is created anew every time the state changes.

  return (
    <div className="App">
      <h1>useMemo</h1>
      <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
        double number?
      </button>
      <p style={themeObject}>
        {doubleNumber} - Thanks to memoization, the component won't calculate
        the number again when theme is changed.
      </p>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Set dark theme?
      </button>
    </div>
  );
};
