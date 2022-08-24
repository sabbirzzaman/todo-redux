import { CHANGE_COLOR, CHANGE_STATUS } from './actionTypes';
import { initialState } from './initialState';

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return { ...state, status: action.payload };
        case CHANGE_COLOR:
            const isMatched = state.colors.find(
                (color) => color === action.payload
            );

            if (!isMatched) {
                return { ...state, colors: [...state.colors, action.payload] };
            } else {
                const newState = state.colors.filter((color) => action.payload !== color);
                return { ...state, colors: [...newState] };
            }

        default:
            return state;
    }
};

export default filterReducer;
