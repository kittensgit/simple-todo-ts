import React, { FC, useState } from 'react';

interface TodoFormProps {
    addTodo: (task: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        addTodo(value);
        setValue('');
    };

    return (
        <div>
            <input
                placeholder="enter task"
                value={value}
                onChange={handleChange}
                type="text"
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
