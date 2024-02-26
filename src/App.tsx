import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { ITodo } from './types/types';
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
        setTodos([newTodo, ...todos]);
    };

    const deleteTodo = (id: ITodo['id']) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const filterTodo = (status: string | boolean) => {
        if (status === 'all') {
            setFilterTodos(todos);
        } else {
            setFilterTodos(todos.filter((todo) => todo.completed === status));
        }
    };

    const toggleTodo = (id: ITodo['id']) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <FilterTodo filterTodo={filterTodo} />
            <TodoList
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                todos={filterTodos}
            />
        </div>
    );
};

export default App;
