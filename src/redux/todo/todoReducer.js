import {
    CLEAR_COMPLETED,
    COLOR_SELECT,
    COMPLETED_TOGGLE,
    COMPLETE_ALL,
    DELETE,
    TODO_ADDED,
} from './actionTypes';
import { initialState } from './initialState';

const todoReducer = (state = initialState, action) => {
    const getId = () => {
        return state.reduce((id, maxId) => Math.max(id, maxId.id), 0) + 1;
    };

    switch (action.type) {
        case TODO_ADDED:
            return [
                ...state,
                {
                    id: getId(),
                    task: action.payload,
                    status: false,
                    color: '',
                },
            ];
        case COMPLETED_TOGGLE: {
            const clickedTodo = state.find(
                (todo) => todo.id === action.payload
            );
            clickedTodo.status = !clickedTodo.status;

            return [...state];
        }
        case COLOR_SELECT: {
            const clickedTodo = state.find(
                (todo) => todo.id === action.payload.id
            );
            if(clickedTodo.color === action.payload.value) {
                clickedTodo.color = ''
            } else {
                clickedTodo.color = action.payload.value;
            }

            return [...state];
        }
        case DELETE: {
            const clickedTodo = state.filter(
                (todo) => todo.id !== action.payload
            );
            return clickedTodo;
        }
        case COMPLETE_ALL: {
            state.map(
                (todo) => todo.status = true
            );
            return [...state];
        }
        case CLEAR_COMPLETED: {
            const clickedTodo = state.filter(
                (todo) => !todo.status
            );
            return clickedTodo;
        }
        default:
            return state;
    }
};

export default todoReducer;
