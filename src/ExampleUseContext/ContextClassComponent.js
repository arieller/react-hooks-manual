import React, { Component } from "react";
import { ThemeContext } from "./ExampleUseContext";

export default class ClassContextComponent extends Component {
  themeStyles(darkTheme) {
    return {
      backgroundColor: darkTheme ? "#000" : "#fff",
      color: darkTheme ? "#fff" : "#000",
      padding: "2rem",
      margin: "2rem",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
