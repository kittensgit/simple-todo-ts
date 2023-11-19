import React, { FC, useState } from 'react';
import { ITodo } from './types/types';
import TodoList from './components/TodoList';

const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id: '1',
            task: 'to go the gym',
            completed: false,
        },
    ]);
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
};

export default App;
