import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    deleteTodo: (id: ITodo['id']) => void;
    toggleTodo: (id: ITodo['id']) => void;
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div style={{ display: 'flex' }}>
            <div
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? 'completed' : ''}
            >
                {todo.task}
            </div>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    );
};

export default TodoItem;
