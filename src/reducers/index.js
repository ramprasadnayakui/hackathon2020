import { combineReducers } from 'redux';
import { loginUser } from './loginReducer';

const rootReducer = combineReducers({
  loginUser
});

export default rootReducer;