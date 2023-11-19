import React, { FC, useState } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
    editTodo: (id: ITodo['id'], task: ITodo['task']) => void;
    toggleTodo: (id: ITodo['id']) => void;
    deleteTodo: (id: ITodo['id']) => void;
}

const TodoItem: FC<TodoItemProps> = ({
    todo,
    deleteTodo,
    toggleTodo,
    editTodo,
}) => {
    const [value, setValue] = useState<string>(todo.task);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSave = (id: ITodo['id'], task: ITodo['task']) => {
        editTodo(id, task);
        setIsEdit(false);
    };

    return (
        <div>
            {isEdit ? (
                <div>
                    <input value={value} onChange={handleChange} />
                    <button onClick={() => handleSave(todo.id, value)}>
                        save
                    </button>
                </div>
            ) : (
                <>
                    <span
                        onClick={() => toggleTodo(todo.id)}
                        className={todo.completed ? 'completed' : ''}
                    >
                        {todo?.task}
                    </span>
                    <button onClick={() => setIsEdit(true)}>edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                </>
            )}
        </div>
    );
};

export default TodoItem;
