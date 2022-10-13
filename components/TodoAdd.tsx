import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

interface ITodoAddProps {
    addItem(newTodo: string): void;
}

export default function TodoAdd(props: ITodoAddProps) {
    const [todoInput, setTodoInput] = useState("");

    const addNewTodo = () => {
        props.addItem(todoInput)
        setTodoInput("");
    };

    return (
        <div className="input-box">
            <input type="text" placeholder="Add new todo..."
                value={todoInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setTodoInput(e.target.value);
                }}
                onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                    e.preventDefault();
                    if (e.key === "Enter" && todoInput) {
                        addNewTodo()
                    }
                }} />
            <button className="btn"
                onClick={() => {
                    if (todoInput) addNewTodo();
                }}>Add</button>

        </div>
    )
}
