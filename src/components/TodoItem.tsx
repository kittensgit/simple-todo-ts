import { FC } from 'react';

import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
    deleteTodo: (id: ITodo['id']) => void;
    toggleTodo: (id: ITodo['id']) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <p
                className={todo.completed ? 'completed' : ''}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.task}
            </p>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    );
};

export default TodoItem;
