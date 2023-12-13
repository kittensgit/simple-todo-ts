import React, { FC, useState } from 'react';

import { ITodo } from '../types/types';

interface TodoFormProps {
    addTodo: (task: ITodo['task']) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleClick = () => {
        addTodo(value);
        setValue('');
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    };
    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="enter task"
                onKeyDown={handleEnter}
            />
            <button onClick={handleClick}>Add task</button>
        </div>
    );
};

export default TodoForm;
