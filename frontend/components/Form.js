import React from "react";

//will hold your input field and your `Add Todo` and `Clear Completed` buttons

//must use this.props

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.todoFormSubmit}>
          <input
            value={this.props.todoName}
            onChange={this.props.todoHandleChange}
            type="text"
            placeholder="type a new todo"
          ></input>
          <button>Submit</button>
        </form>
        <button onClick={this.props.toggleDisplay}>Toggle Completed</button>
      </div>
    );
  }
}
