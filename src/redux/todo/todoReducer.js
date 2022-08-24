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
                    completed: false,
                    color: [],
                },
            ];
        case COMPLETED_TOGGLE: {
            const clickedTodo = state.find(
                (todo) => todo.id === action.payload
            );
            clickedTodo.completed = !clickedTodo.completed;

            return clickedTodo;
        }
        case COLOR_SELECT: {
            const clickedTodo = state.find(
                (todo) => todo.id === action.payload
            );
            clickedTodo.color = [action.payload];

            return clickedTodo;
        }
        case DELETE: {
            const clickedTodo = state.filter(
                (todo) => todo.id !== action.payload
            );
            return clickedTodo;
        }
        case COMPLETE_ALL: {
            const copiedState = state.map((todo) => (todo.completed = true));
            return copiedState;
        }
        case CLEAR_COMPLETED: {
            const copiedState = state.filter(
                (todo) => todo.completed === false
            );
            return copiedState;
        }
        default:
            return state;
    }
};

export default todoReducer;
