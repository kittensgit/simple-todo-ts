import React, { FC, useState } from 'react';
import { ITodo } from '../types/types';

interface EditFormProps {
    todo: ITodo;
    handleSave: (id: ITodo['id'], task: ITodo['task']) => void;
}

const EditForm: FC<EditFormProps> = ({ todo, handleSave }) => {
    const [value, setValue] = useState<string>(todo.task);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSave(todo.id, value);
        }
    };

    return (
        <div>
            <input
                value={value}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
            <button onClick={() => handleSave(todo.id, value)}>save</button>
        </div>
    );
};

export default EditForm;
