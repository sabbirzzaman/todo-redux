import { faCircleCheck, faCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import cancelImage from '../assets/images/cancel.png';
import deleteTodo from '../redux/todos/thunk/deleteTodo';
import editTodo from '../redux/todos/thunk/editTodo';
import updateColor from '../redux/todos/thunk/updateColor';
import updateStatus from '../redux/todos/thunk/updateStatus';

export default function Todo({ todo, isCompleted }) {
    const dispatch = useDispatch();
    const [editInput, setEditInput] = useState('');
    const [idEditing, setIsEditing] = useState(false);

    const { text, id, completed, color } = todo;

    const handleStatusChange = (todoId) => {
        dispatch(updateStatus(todoId, completed));
    };

    const handleColorChange = (todoId, color) => {
        dispatch(updateColor(todoId, color));
    };

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    const handleEditTodo = () => {
        setIsEditing(true);
        setEditInput(text);
    };

    const handleSaveEdit = (todoId, textInput) => {
        dispatch(editTodo(todoId, textInput));
        setIsEditing(false);
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed &&
                    'border-green-500 focus-within:border-green-500'
                }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            <div
                className={`select-none flex-1 ${completed && 'line-through'}`}
            >
                {!idEditing ? (
                    <p>{text}</p>
                ) : (
                    <>
                        <input
                            onChange={(e) => setEditInput(e.target.value)}
                            type="text" 
                            className='w-3/4 rounded bg-gray-100 text-gray-500 p-1'
                            value={editInput}
                        />
                        <button
                            className="text-green-500 text-white mx-3 text-lg"
                            onClick={() => handleSaveEdit(id, editInput)}
                        >
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </button>
                        <button
                            className="text-red-500 text-white text-lg"
                            onClick={() => handleSaveEdit(id, text)}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </>
                )}
            </div>

            {!isCompleted ? (
                <>
                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
                            color === 'green' && 'bg-green-500'
                        }`}
                        onClick={() => handleColorChange(id, 'green')}
                    ></div>

                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
                            color === 'yellow' && 'bg-yellow-500'
                        }`}
                        onClick={() => handleColorChange(id, 'yellow')}
                    ></div>

                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
                            color === 'red' && 'bg-red-500'
                        }`}
                        onClick={() => handleColorChange(id, 'red')}
                    ></div>

                    <button
                        className="text-violet-600"
                        onClick={() => handleEditTodo(id)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>

                    <img
                        src={cancelImage}
                        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                        alt="Cancel"
                        onClick={() => handleDelete(id)}
                    />
                </>
            ) : (
                <>
                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto border-green-500 ${
                            color === 'green' && 'bg-green-500'
                        }`}
                    ></div>

                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto border-yellow-500 ${
                            color === 'yellow' && 'bg-yellow-500'
                        }`}
                    ></div>

                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto border-red-500 ${
                            color === 'red' && 'bg-red-500'
                        }`}
                    ></div>
                </>
            )}
        </div>
    );
}
