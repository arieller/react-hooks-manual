import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#000" : "#fff",
    color: darkTheme ? "#fff" : "#000",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};
