import { FC } from 'react';

import { ITodo } from '../types/types';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: ITodo[];
    deleteTodo: (id: ITodo['id']) => void;
    toggleTodo: (id: ITodo['id']) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
