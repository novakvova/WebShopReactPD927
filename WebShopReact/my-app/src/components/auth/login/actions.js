import * as types from './types';
import LoginService from './service';

export const login = (model) => {
    return(dispatch) => {
        //почали процес авторизації
        dispatch({type: types.LOGIN_STARTED});
        LoginService.loginUser(model)
            .then((response) => {
                dispatch({type: types.LOGIN_SUCCESS});
            }, bad => {
                dispatch({type: types.LOGIN_FAILED, errors: bad.responce.data})
            })
            .catch(err => {
                console.log("Global server error");
            });
    };
}