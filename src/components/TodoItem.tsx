import React, { FC } from 'react';

import styles from '../css/TodoItem.module.css';

import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
    removeTodo: (task: ITodo['task']) => void;
    toggleTodo: (task: ITodo['task']) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, removeTodo, toggleTodo }) => {
    return (
        <div>
            <span
                className={todo.completed ? styles.completed : ''}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.task}
            </span>
            <button onClick={() => removeTodo(todo.id)}>remove</button>
        </div>
    );
};

export default TodoItem;
