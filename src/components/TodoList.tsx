import React, { FC } from 'react';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
    return (
        <div>
            {todos.map((todo: ITodo) => (
                <TodoItem todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
