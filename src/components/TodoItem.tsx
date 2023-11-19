import React, { FC, useState } from 'react';
import { ITodo } from '../types/types';
import EditForm from './EditForm';

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
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleSave = (id: ITodo['id'], task: ITodo['task']) => {
        editTodo(id, task);
        setIsEdit(false);
    };

    return (
        <div>
            {isEdit ? (
                <EditForm todo={todo} handleSave={handleSave} />
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
