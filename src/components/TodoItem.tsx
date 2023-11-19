import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
    deleteTodo: (id: ITodo['id']) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo }) => {
    return (
        <div>
            {todo?.task}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    );
};

export default TodoItem;
