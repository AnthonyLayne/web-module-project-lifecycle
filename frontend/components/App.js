import axios from "axios";
import React from "react";

import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  state = {
    todos: [],
    completedTodo: false,
    errorMessage: "",
    todoName: "",
  };

  getAllTodos = () => {
    axios
      .get(URL)
      .then((res) => {
        this.setState({ ...this.state, todos: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postAllTodos = () => {};

  patchAllTodos = () => {};

  render() {
    return (
      <div className="App">
        <div id="error">{this.state.error}</div>
        <TodoList />

        <Form />
      </div>
    );
  }
}
