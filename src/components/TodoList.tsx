import React, { FC } from 'react';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';

interface TodoListProps {
    deleteTodo: (id: ITodo['id']) => void;
    todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;
