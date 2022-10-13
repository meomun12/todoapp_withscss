import React, { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import TodoAdd from "./TodoAdd";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import TodoSort from "./TodoSort";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (todos.length !== 0) return;
    getFromLocalStorage();
  });

  const getFromLocalStorage = () => {
    let listFromLocalStorage = localStorage.getItem("Todo items");
    if (!listFromLocalStorage) {
      setLocalStorage([]);
    } else {
      let storageTodos: Todo[] = JSON.parse(listFromLocalStorage);
      if (storageTodos.length === 0) return;
      setTodos(storageTodos);
    }
  };

  const setLocalStorage = (list: Todo[] | []) => {
    localStorage.setItem("Todo items", JSON.stringify(list));
  };

  const addItem = (todo: string) => {
    let newTodoList = [...todos];
    let newTodo = new Todo(todo);
    newTodoList.push(newTodo);
    setLocalStorage(newTodoList);
    setTodos(newTodoList);
  };

  const toggleTodo = (id: number) => {
    let todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
      let newTodoList = [...todos];
      setLocalStorage(newTodoList);
      setTodos(newTodoList);
    }
  };

  const removeTodo = (id: number) => {
    let index = todos.findIndex((todo) => todo.id === id);
    let newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setLocalStorage(newTodoList);
    setTodos(newTodoList);
  };

  const sortByName = () => {
    let newTodoList = [...todos];
    newTodoList.sort((a, b) => a.task.localeCompare(b.task));
    setTodos(newTodoList);
  };

  const sortByDate = () => {
    let newTodoList = [...todos];
    newTodoList.sort(function (a, b) {
      return b.id - a.id;
    });
    setTodos(newTodoList);
  };

  const sortByDone = () => {
    let newTodoList = [...todos];
    newTodoList.sort((x, y) => {
      return x.done === y.done ? 0 : x.done ? 1 : -1;
    });
    setTodos(newTodoList);
  };

  const sortByNotDone = () => {
    let newTodoList = [...todos];
    newTodoList.sort((x, y) => {
      return x.done === y.done ? 0 : x.done ? -1 : 1;
    });
    setTodos(newTodoList);
  };

  return (
    <div className="todo-content">
      <TodoHeader />
      <TodoAdd addItem={addItem} />
      <TodoSort
        sortByName={sortByName}
        sortByDate={sortByDate}
        sortByDone={sortByDone}
        sortByNotDone={sortByNotDone}
      />
      <TodoItem todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
