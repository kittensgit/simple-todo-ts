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

    const toggleTodo = (id: ITodo['id']) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : { ...todo }
            )
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <TodoForm addTodo={addTodo} />
            <TodoList
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                todos={todos}
            />
        </div>
    );
};

export default App;
