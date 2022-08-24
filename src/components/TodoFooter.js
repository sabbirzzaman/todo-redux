import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterStatus, colorFilter } from '../redux/filters/actions';

const TodoFooter = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const handleStatus = (value) => {
        dispatch(changeFilterStatus(value));
    };

    const handleTodoColor = (value) => {
        dispatch(colorFilter(value));
    };

    const { status, colors } = filters;

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>2 tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    onClick={() => handleStatus('All')}
                    className={`cursor-pointer ${
                        status === 'All' && 'font-bold'
                    }`}
                >
                    All
                </li>
                <li>|</li>
                <li
                    onClick={() => handleStatus('Incomplete')}
                    className={`cursor-pointer  ${
                        status === 'Incomplete' && 'font-bold'
                    }`}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li
                    onClick={() => handleStatus('Complete')}
                    className={`cursor-pointer  ${
                        status === 'Complete' && 'font-bold'
                    }`}
                >
                    Complete
                </li>
                <li></li>
                <li></li>
                <li onClick={() => handleTodoColor('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}></li>
                <li onClick={() => handleTodoColor('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}></li>
                <li onClick={() => handleTodoColor('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}></li>
            </ul>
        </div>
    );
};

export default TodoFooter;
