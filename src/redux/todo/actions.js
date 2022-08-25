import {
    TODO_LOADED,
    TODO_ADDED,
    COMPLETED_TOGGLE,
    COLOR_SELECT,
    DELETE,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
} from './actionTypes';

export const loadTodo = (todo) => {
    return {
        type: TODO_LOADED,
        payload: todo,
    };
};

export const addTodo = (value) => {
    return {
        type: TODO_ADDED,
        payload: value,
    };
};

export const completeToggle = (id) => {
    return {
        type: COMPLETED_TOGGLE,
        payload: id,
    };
};

export const todoColor = (id, value) => {
    return {
        type: COLOR_SELECT,
        payload: { id, value },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE,
        payload: id
    };
};

export const completeAllTodo = () => {
    return {
        type: COMPLETE_ALL,
    };
};

export const clearCompletedTodo = () => {
    return {
        type: CLEAR_COMPLETED,
    };
};
