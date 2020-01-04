import {constants} from '../constants/constants';

export function loginUser(state = {}, action){
    switch(action.type){
        case constants.LOGIN_USER: return {
            isLoggedIn : true,
            user: action.payload.username
        }
        default: 
        return state;
    }
}