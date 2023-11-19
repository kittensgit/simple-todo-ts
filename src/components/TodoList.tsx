import React, { FC } from 'react';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: ITodo[];
    deleteTodo: (id: ITodo['id']) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo: ITodo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;
