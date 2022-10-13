import React from 'react'
import { Todo } from '../models/Todo';

interface ITodoItemProps {
    todos: Todo[];
    removeTodo(todoId: number): void;
    toggleTodo(todoId: number): void;
}

export default function TodoItem(props: ITodoItemProps) {
    const getRemovedTodo = (id: number) => {
        props.removeTodo(id)
    }

    const getToggledTodo = (id: number) => {
        props.toggleTodo(id)
    }

    const emptyHTML = <p className="placeholder-no-todos">You have no tasks right now. Yay &#128522;</p>

    if (props.todos.length === 0) {
        return emptyHTML
    }

    const todoHTML = props.todos.map((todo) => {
        return <div className="todo" key={todo.id}>

            {todo.done ? (
                <div className="todo-done-wrapper">
                    <div className="todo-title done">
                        <div className="todo-done-checked">
                            <svg
                                onClick={() => {
                                    getToggledTodo(todo.id);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                height="20px"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                                />
                            </svg>
                            <span>{todo.task}</span>
                        </div>
                        <span className="remove-box">
                            <button className="remove-btn"
                                onClick={() => {
                                    getRemovedTodo(todo.id);
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="20px">
                                    <path
                                        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className="todo-date">
                        Created: {todo.created}
                    </div>
                </div>) : (
                <div className="todo-not-done-wrapper">
                    <div className="todo-title">
                        <div className="todo-done-checked">
                            <input type="checkbox"
                                onChange={() => {
                                    getToggledTodo(todo.id);
                                }} />
                            <span>{todo.task}</span>
                        </div>
                        <span className="remove-box">
                            <button className="remove-btn"
                                onClick={() => {
                                    getRemovedTodo(todo.id);
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="20px">
                                    <path
                                        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div className="todo-date">
                        Created: {todo.created}
                    </div>
                </div>

            )}
        </div>

    }
    );

    return (
        <div className="todo-box">

            {todoHTML}
        </div>
    )
}

