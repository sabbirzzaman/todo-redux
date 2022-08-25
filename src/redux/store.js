import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import thinkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thinkMiddleware));

export default store;
