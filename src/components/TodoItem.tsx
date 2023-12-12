import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            <span>{todo.task}</span>
            <button>remove</button>
        </div>
    );
};

export default TodoItem;
