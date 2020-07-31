import React, { useState, useEffect, useCallback } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items, useCallback example");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default () => {
  /*
  useCallback - when a component is being re-rendered, all the functions and object are re-created, even if they are practically the same.
  their reference changes.
  using useCallback, we can prevent that re-creation, unless it is actually needed. (similar to useMemo)
  unlike useMemo, useCallback returns the actual function being passed to, that allows us to use arguments.
  useMemo returns the return value of the function.
  we can use useCallback functions all over our app.

  another use case is if the function is very complex and slow to create, useCallback will help unnecessary recreations.
  */

  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor = 1) => {
      return [number, number + incrementor, number + incrementor + incrementor];
    },
    [number]
  ); //this function will be re-created only when number is changed, and will persist between re-renders otherwise.

  const theme = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div className="App">
      <h1>useCallback</h1>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
      </div>
      <List getItems={getItems} />
    </div>
  );
};
