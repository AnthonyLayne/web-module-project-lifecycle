import React from "react";

//is a component that takes in the `todo` data and displays the task to the screen

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={this.props.toggleCompleteTodo(this.props.todo.id)}>
        {this.props.todo.name} {this.props.todo.completed ? "✔️" : ""}
      </div>
    );
  }
}
