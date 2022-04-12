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

  reset = () => {
    this.setState({ ...this.state, todoName: "" });
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
        this.setState({ ...this.state, errorMessage: err.response.data.message });
      });
  };

  postNewTodo = () => {
    //update state and post to api endpoint, can use .concat to add new info to existing array/returns new array
    //post takes two arguments URL and data object you want sent to the api endpoint
    axios
      .post(URL, { name: this.state.todoName })
      .then((res) => {
        this.setState({ ...this.state, todos: this.state.todos.concat(res.data.data) });
        this.reset();
      })
      .catch((err) => {
        this.setState({ ...this.state, errorMessage: err.response.data.message });
      });
  };

  todoFormSubmit = (e) => {
    e.preventDefault();
    this.postNewTodo();
  };

  todoHandleChange = (e) => {
    this.setState({ ...this.state, todoName: e.target.value });
  };

  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return (
      <div className="App">
        <div id="error">{this.state.errorMessage}</div>
        <TodoList todos={this.state.todos} />

        <Form
          todoFormSubmit={this.todoFormSubmit}
          todoHandleChange={this.todoHandleChange}
          todoName={this.state.todoName}
        />
      </div>
    );
  }
}
