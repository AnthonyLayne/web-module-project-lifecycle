import React from "react";

//will hold your input field and your `Add Todo` and `Clear Completed` buttons

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input></input>
        <button>Submit</button>
        <button>Clear Completed Todos</button>
      </div>
    );
  }
}
