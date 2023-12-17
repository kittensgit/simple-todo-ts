import React, { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { ITodo } from './types/types';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import styles from './css/App.module.css';
import FilterTodo from './components/FilterTodo';

const App: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filterTodos, setFilterTodos] = useState<ITodo[]>(todos);

    useEffect(() => {
        setFilterTodos(todos);
    }, [todos]);

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
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const filterTodo = (status: string | boolean) => {
        if (status === 'all') {
            setFilterTodos(todos);
        } else {
            setFilterTodos(todos.filter((todo) => todo.completed === status));
        }
    };

    return (
        <div className={styles.app}>
            <TodoForm addTodo={addTodo} />
            <FilterTodo filterTodo={filterTodo} />
            <TodoList
                todos={filterTodos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default App;
