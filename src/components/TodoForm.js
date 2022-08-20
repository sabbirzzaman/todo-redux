import React from 'react';
import noteImg from '../images/notes.png'
import tickImg from '../images/double-tick.png'
import plusImg from '../images/plus.png'

const TodoForm = () => {
    return (
        <div>
            <form class="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImg} class="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    class={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul class="flex justify-between my-4 text-xs text-gray-500">
                <li class="flex space-x-1 cursor-pointer">
                    <img
                        class="w-4 h-4"
                        src={tickImg}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li class="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
};

export default TodoForm;
