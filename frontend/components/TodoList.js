import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <div>
          {this.props.todos.map((todo) => {
            return <div key={todo.id}>{todo.name}</div>;
          })}
        </div>
      </div>
    );
  }
}
