import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div>
            {todo.task} <button>delete</button>
        </div>
    );
};

export default TodoItem;
