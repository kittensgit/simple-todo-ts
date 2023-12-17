import React, { FC } from 'react';

import { ITodo } from '../types/types';

import styles from '../css/TodoItem.module.css';

interface TodoItemProps {
    todo: ITodo;
    deleteTodo: (id: ITodo['id']) => void;
    toggleTodo: (id: ITodo['id']) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div>
            <p
                className={todo.completed ? styles.completed : ''}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.task}
            </p>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    );
};

export default TodoItem;
