import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Tasks from "../tasks/Tasks";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  let taskLength = todos.length;

  let otherNewTodos = [...todos];
  otherNewTodos = otherNewTodos.filter((todo) => todo.complete === false);
  let taskDone =
    otherNewTodos.length === 0 ? (
      <h4>All Tasks Completed!</h4>
    ) : (
      <h4>
        {otherNewTodos.length} tasks left out of {taskLength}
      </h4>
    );

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function deleteTodo() {
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => todo.complete !== true);
    setTodos(newTodos);
  }

  let nodone = Math.floor(parseInt(taskLength - otherNewTodos.length) * (100 / taskLength));



  return (
    <div className="pt-5 h-full flex flex-col">
      <div className="flex flex-col p-2 pt-0">
        <div className="m-auto p-4">
          <h1 className="text-3xl font-serif underline">Add a new task</h1>
        </div>
        <div className="flex">
          <input
            ref={todoNameRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <button
            className="btn btn-outline btn-success"
            onClick={handleAddTodo}
          >
            Add Todo!
          </button>
        </div>
      </div>
      <div className="list__todo-tasks">
        <Tasks todos={todos} toggleTodo={toggleTodo} />
      </div>
      <div className="flex flex-col">
        {taskLength ? (
          <div
            className="radial-progress text-primary"
            style={{ "--value":  nodone  }}
          >
            {nodone}
          </div>
        ) : (
          ""
        )}
        {taskLength ? taskDone : ""}
        <button className="btn glass hover:text-black hover:bg-slate-400 hover:scale-105 duration-300" onClick={deleteTodo}>
          Delete Selected
        </button>
      </div>
    </div>
  );
};

export default TodoList;
