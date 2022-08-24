import React, { useState } from 'react';
import noteImg from '../images/notes.png';
import tickImg from '../images/double-tick.png';
import plusImg from '../images/plus.png';
import {
    addTodo,
    clearCompletedTodo,
    completeAllTodo,
} from '../redux/todo/actions';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const addNewTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    const removeCompletedTodo = () => {
        dispatch(clearCompletedTodo());
    };

    const completeAllTask = () => {
        dispatch(completeAllTodo());
    };

    return (
        <div>
            <form
                onSubmit={(e) => addNewTodo(e)}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img src={noteImg} className="w-6 h-6" alt="Add todo" />
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Type your todo"
                    value={input}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <input
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
                    value=""
                />
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    onClick={completeAllTask}
                    className="flex space-x-1 cursor-pointer"
                >
                    <img className="w-4 h-4" src={tickImg} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={removeCompletedTodo} className="cursor-pointer">
                    Clear completed
                </li>
            </ul>
        </div>
    );
};

export default TodoForm;
