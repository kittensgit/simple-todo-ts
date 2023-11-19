import React, { FC } from 'react';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: ITodo[];
    editTodo: (id: ITodo['id'], task: ITodo['task']) => void;
    deleteTodo: (id: ITodo['id']) => void;
    toggleTodo: (id: ITodo['id']) => void;
}

const TodoList: FC<TodoListProps> = ({
    todos,
    deleteTodo,
    toggleTodo,
    editTodo,
}) => {
    return (
        <div>
            {todos.map((todo: ITodo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
