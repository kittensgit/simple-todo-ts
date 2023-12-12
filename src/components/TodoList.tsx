import React, { FC } from 'react';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: ITodo[];
    removeTodo: (task: ITodo['task']) => void;
    toggleTodo: (task: ITodo['task']) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, removeTodo, toggleTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
