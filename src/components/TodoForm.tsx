import React, { FC, useState } from 'react';
import { ITodo } from '../types/types';

interface TodoFormProps {
    addTodo: (task: ITodo['task']) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (value) {
            addTodo(value);
            setValue('');
        }
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div>
            <input
                onKeyDown={handleEnter}
                onChange={handleChange}
                value={value}
                placeholder="enter task"
                type="text"
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
