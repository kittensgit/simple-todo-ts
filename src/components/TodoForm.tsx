import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { ITodo } from '../types/types';

interface TodoFormProps {
    addTodo: (task: ITodo['id']) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleAddTodo = () => {
        addTodo(value);
        setValue('');
    };

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };
    return (
        <div>
            <input
                value={value}
                onChange={handleChange}
                onKeyDown={handleEnter}
                placeholder="enter task"
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
