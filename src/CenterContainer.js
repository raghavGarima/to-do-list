import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
export default class CenterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      search: "",
      completedToDO: [],
    };
  }

  newToDo = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  addTODo = () => {
    let todo = {
      toDoWork: this.state.search,
      done: false,
    };
    this.setState({
      todoList: [...this.state.todoList, todo],
      search: "",
    });
  };
  deleteToDO = (todoInfo) => {
    let filter = this.state.todoList.filter((ele) => {
      if (ele.toDoWork !== todoInfo.toDoWork) {
        return ele;
      }
    });
    this.setState({
      todoList: filter,
    });
  };
  toDoDone = (todoInfo) => {
    todoInfo.done = true;

    let complete = this.state.todoList.filter((ele) => {
      if (ele.done == true) {
        return ele;
      }
    });
    let notComplete = this.state.todoList.filter((ele) => {
      if (ele.done != true) {
        return ele;
      }
    });
    this.setState({
      completedToDO: [...this.state.completedToDO, complete[0]],
      todoList: notComplete,
    });
  };
  render() {
    return (
      <div className="container">
        <div style={{ width: "100%" }}>
          {" "}
          <input
            type="search"
            value={this.state.search}
            className="searchBar"
            placeholder="  Add a task here ..."
            onChange={(event) => {
              this.newToDo(event);
            }}
          />
          <i className="fa fa-plus" onClick={this.addTODo}></i>
        </div>
        {this.state.todoList.map((ele) => (
          <div className="todoList">
            <div className="todoText">{ele.toDoWork}</div>

            <div className="todoIcons">
              <i
                className="fa fa-check-circle"
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  this.toDoDone(ele);
                }}
              ></i>
              <i
                className="fa fa-times-circle"
                onClick={() => {
                  this.deleteToDO(ele);
                }}
              ></i>
            </div>
          </div>
        ))}
        {/* <div className="todoList">
          <div className="todoText">learn redux</div>

          <div className="todoIcons">
            <i
              className="fa fa-check-circle"
              style={{ marginRight: "1rem" }}
            ></i>
            <i className="fa fa-times-circle"></i>
          </div>
        </div>
        <div className="todoList">
          <div className="todoText">learn typescript</div>

          <div className="todoIcons">
            <i
              className="fa fa-check-circle"
              style={{ marginRight: "1rem" }}
              s
            ></i>
            <i className="fa fa-times-circle"></i>
          </div>
        </div> */}
        <div className="HorizontalLine"></div>

        {this.state.completedToDO.map((ele) => (
          <div
            className="todoList"
            style={{
              backgroundColor: "#387fd7",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            <div className="todoText">{ele.toDoWork}</div>

            <div className="todoIcons" style={{ color: "white" }}>
              <i className="fa fa-check-circle"></i>
            </div>
          </div>
        ))}
        {/* ) : (
          ""
        )} */}
      </div>
    );
  }
}
