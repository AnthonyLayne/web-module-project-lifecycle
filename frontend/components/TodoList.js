import React from "react";
import Todo from "./Todo";

//receives your todos array and iterates over the list generating a new `<Todo />` for each element in the array

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
