import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { ITodo } from './types/types';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { v4 } from 'uuid';
import FilterTodo from './components/FilterTodo';

const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filtered, setFiltered] = useState<ITodo[]>(todos);

    useEffect(() => {
        setFiltered(todos);
    }, [todos]);

    const addTodo = (task: ITodo['task']) => {
        const newTodo: ITodo = {
            id: v4(),
            task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id: ITodo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: ITodo['id']) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const filterTodo = (status: string | boolean) => {
        if (status === 'all') {
            setFiltered(todos);
        } else {
            setFiltered(todos.filter((todo) => todo.completed === status));
        }
    };

    return (
        <div className="App">
            <TodoForm addTodo={addTodo} />
            <FilterTodo filterTodo={filterTodo} />
            <TodoList
                todos={filtered}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default App;
