import { FC } from 'react';

import { ITodo } from '../types/types';

import TodoItem from './TodoItem';

interface TodoListProps {
    deleteTodo: (id: ITodo['id']) => void;
    toggleTodo: (id: ITodo['id']) => void;
    todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;
