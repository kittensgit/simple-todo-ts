import React, { FC } from 'react';

interface FilterTodoProps {
    filterTodo: (status: string | boolean) => void;
}

const FilterTodo: FC<FilterTodoProps> = ({ filterTodo }) => {
    return (
        <div>
            <button onClick={() => filterTodo('all')}>All</button>
            <button onClick={() => filterTodo(true)}>Completed</button>
            <button onClick={() => filterTodo(false)}>Uncompleted</button>
        </div>
    );
};

export default FilterTodo;
