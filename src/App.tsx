import React, { FC, useState } from 'react';
import { ITodo } from './types/types';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 } from 'uuid';

const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (task: ITodo['task']) => {
        const newTodo: ITodo = {
            id: v4(),
            task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: ITodo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <TodoList deleteTodo={deleteTodo} todos={todos} />
        </div>
    );
};

export default App;
