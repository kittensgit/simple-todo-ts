import React, { FC, useState, useEffect } from 'react';
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

    const [filtered, setFiltered] = useState<ITodo[]>(todos);

    useEffect(() => {
        setFiltered(todos);
    }, [todos]);

    const filterTodo = (status: string | boolean) => {
        if (status === 'all') {
            setFiltered(todos);
        } else {
            const newTodos: ITodo[] = [...todos].filter(
                (todo) => todo.completed === status
            );
            setFiltered(newTodos);
        }
    };

    const addTodo = (task: ITodo['task']) => {
        const newTodo: ITodo = {
            id: v4(),
            task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
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

    const editTodo = (id: ITodo['id'], task: ITodo['task']) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task } : { ...todo }
            )
        );
    };

    const deleteTodo = (id: ITodo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <button onClick={() => filterTodo('all')}>All</button>
            <button onClick={() => filterTodo(true)}>Completed</button>
            <button onClick={() => filterTodo(false)}>Uncompleted</button>
            <TodoList
                editTodo={editTodo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                todos={filtered}
            />
        </div>
    );
};

export default App;
