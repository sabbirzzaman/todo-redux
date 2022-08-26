import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../redux/todos/thunk/fetchTodos';
import Todo from './Todo';

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return "No task";
        case 1:
            return "1 task";
        default:
            return `${no_of_todos} tasks`;
    }
};

export default function TodoList({ isCompleted }) {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);

    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case 'Complete':
                return todo.completed;

            case 'Incomplete':
                return !todo.completed;

            default:
                return true;
        }
    };

    const todoCompleted = todos.filter((todo) => todo.completed).length;

    const filterByColors = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {isCompleted && <p className='mb-4 text-gray-500'>Todo Completed</p>}
            {todos
                .filter(filterByStatus)
                .filter(filterByColors)
                .filter(todo => isCompleted ? todo.completed : !todo.completed)
                .map((todo) => (
                    <Todo todo={todo} key={todo.id} isCompleted={isCompleted} />
                ))}
            {isCompleted && <p className='mt-4 text-xs text-gray-500'>{numberOfTodos(todoCompleted)} completed</p>}
        </div>
    );
}
