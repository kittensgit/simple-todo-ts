import React, { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import styles from './css/App.module.css';

import { ITodo } from './types/types';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
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

    const sortByAlphabet = () => {
        const sortedTodos = [...todos].sort((a, b) => {
            return a.task.localeCompare(b.task);
        });

        setTodos(sortedTodos);
    };

    return (
        <div className={styles.app}>
            <TodoForm addTodo={addTodo} />
            <FilterTodo filterTodo={filterTodo} />
            <button onClick={() => sortByAlphabet()}>sort by alphabet</button>
            <TodoList
                todos={filtered}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default App;
