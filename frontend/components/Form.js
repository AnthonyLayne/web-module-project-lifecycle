import React from "react";

//will hold your input field and your `Add Todo` and `Clear Completed` buttons

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.todoFormSubmit}>
        <input
          value={this.props.todoName}
          onChange={this.props.todoHandleChange}
          type="text"
          placeholder="type a new todo"
        ></input>
        <button>Submit</button>
        <button>Toggle Completed</button>
      </form>
    );
  }
}
