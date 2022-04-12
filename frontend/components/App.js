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
    //res.data.data
    //res.data.message
    axios
      .get(URL)
      .then((res) => {
        this.setState({ ...this.state, todos: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return (
      <div className="App">
        <div id="error">{this.state.error}</div>
        <TodoList todos={this.state.todos} />

        <Form />
      </div>
    );
  }
}
