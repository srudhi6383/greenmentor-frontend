import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer } from './Login/reducer';
import { signupReducer } from './Register/reducer';
import { taskReducer } from './Task/reducer';

const rootReducer = combineReducers({ loginReducer, signupReducer, taskReducer });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
