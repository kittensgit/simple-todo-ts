import { FC } from 'react';

import { ITodo } from '../types/types';

interface TodoItemProps {
    deleteTodo: (id: ITodo['id']) => void;
    toggleTodo: (id: ITodo['id']) => void;
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo }) => {
    const handleDeleteTodo = () => {
        deleteTodo(todo.id);
    };

    const handleToggleTodo = () => {
        toggleTodo(todo.id);
    };

    return (
        <div>
            <span
                onClick={handleToggleTodo}
                className={todo.completed ? 'completed' : ''}
            >
                {todo.task}
            </span>
            <button onClick={handleDeleteTodo}>X</button>
        </div>
    );
};

export default TodoItem;
