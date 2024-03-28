import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { loginReducer } from './redux/Login/reducer';
import { signupReducer } from './redux/Register/reducer';
import { taskReducer} from './redux/Task/reducer'

const rootReducer = combineReducers({loginReducer,signupReducer,taskReducer});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;