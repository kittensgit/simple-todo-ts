import React, { FC, useState } from 'react';

import { ITodo } from '../types/types';

interface TodoFormProps {
    addTodo: (task: ITodo['task']) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleAddTodo = () => {
        addTodo(value);
        setValue('');
    };

    return (
        <div>
            <input
                placeholder="enter task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
