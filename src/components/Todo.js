import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodo from '../redux/todo/thunk/fetchTodo';

const Todo = () => {
    const allTodo = useSelector((state) => state.todo);
    const filters = useSelector((state) => state.filters);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodo)
    }, [dispatch])

    const { status, colors } = filters;

    const filterByStatus = (todo) =>
        (status === 'Incomplete' && !todo.completed) ||
        (status === 'Complete' && todo.completed) ||
        (status === 'All' && todo);

    const filterByColor = (todo) =>
        colors.length > 0 ? colors.includes(todo?.color) : todo;

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {allTodo.length > 0 ? (
                allTodo
                    .filter(filterByStatus)
                    .filter(filterByColor)
                    .map((todo) => <TodoItem key={todo.id} todo={todo} />)
            ) : (
                <p className='text-center py-10'>No Task Left</p>
            )}
        </div>
    );
};

export default Todo;
