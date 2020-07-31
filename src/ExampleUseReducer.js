import React, { useState, useReducer } from "react";

// it's better not to use changing strings all over the code.
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

/**
 *
 * @param {*} state - current state
 * @param {*} action - action to perform
 */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default () => {
  /*
  useReducer - allows us to manage and control state in our app. (like useState).
  works in a similar pattern to Redux reducer.
  */

  const [state, dispatch] = useReducer(reducer, { count: 0 }); //takes in function to change state [dispatch sends to reducer], and default state. state doesnt have to be an object.

  // const [count, setCount] = useState(0);

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: ACTIONS.INCREMENT }); //we pass a type to our dispatch for the switch function
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <h1>useReducer</h1>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
};
