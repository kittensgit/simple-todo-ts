import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
    toggleTodo: (id: ITodo['id']) => void;
    deleteTodo: (id: ITodo['id']) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div>
            <span
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? 'completed' : ''}
            >
                {todo?.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    );
};

export default TodoItem;
