import { FC } from 'react';

interface FilterTodoProps {
    filterTodo: (status: string | boolean) => void;
}

const FilterTodo: FC<FilterTodoProps> = ({ filterTodo }) => {
    return (
        <div>
            <button onClick={() => filterTodo('all')}>all</button>
            <button onClick={() => filterTodo(true)}>completed</button>
            <button onClick={() => filterTodo(false)}>uncompleted</button>
        </div>
    );
};

export default FilterTodo;
