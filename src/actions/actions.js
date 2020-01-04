import {constants} from '../constants/constants';


//Pass the username and password as parameters in the method below when the actual behaviour is being implemented.
export const actions = {
    loginUser
};

function loginUser(username,password){
    return ({
        type: constants.LOGIN_USER,
        payload: {
            username,
            password
        }
    })
}