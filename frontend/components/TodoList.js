import React from "react";
import Todo from "./Todo";

//receives your todos array and iterates over the list generating a new `<Todo />` for each element in the array

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {this.props.todos.reduce((acc, td) => {
          if (this.props.completedTodo || !td.completed)
            return acc.concat(
              <Todo key={td.id} toggleCompleteTodo={this.props.toggleCompleteTodo} todo={td} />
            );
          return acc;
        }, [])}
      </div>
    );
  }
}
