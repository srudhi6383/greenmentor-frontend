import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { loginReducer } from './redux/login/reducer';
import { signupReducer } from './redux/register/reducer';
import { taskReducer} from './redux/task/reducer'

const rootReducer = combineReducers({loginReducer,signupReducer,taskReducer});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;