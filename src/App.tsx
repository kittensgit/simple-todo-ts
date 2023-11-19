import React, { FC, useState } from 'react';
import { ITodo } from './types/types';
import TodoList from './components/TodoList';
import { v4 } from 'uuid';
import TodoForm from './components/TodoForm';

const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id: '1',
            task: 'to go the gym',
            completed: false,
        },
    ]);

    const addTodo = (task: string) => {
        const newTodo: ITodo = {
            id: v4(),
            task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
};

export default App;
