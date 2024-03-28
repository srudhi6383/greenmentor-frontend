import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import  loginReducer from './Redux/Login/reducer';
import  signupReducer  from './Redux/Register/reducer';
import  taskReducer from './Redux/Task/reducer'

const rootReducer = combineReducers({loginReducer,signupReducer,taskReducer});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
