import { FC, useState } from 'react';
import { v4 } from 'uuid';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { ITodo } from './types/types';

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
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="app">
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default App;
