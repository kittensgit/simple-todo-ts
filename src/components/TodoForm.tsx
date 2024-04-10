import { ChangeEvent, FC, useState, KeyboardEvent } from 'react';
import { ITodo } from '../types/types';

interface TodoFormProps {
    addTodo: (task: ITodo['task']) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const handleAdd = () => {
        addTodo(value);
        setValue('');
    };

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAdd();
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
            <button onClick={handleAdd}>add</button>
        </div>
    );
};

export default TodoForm;
