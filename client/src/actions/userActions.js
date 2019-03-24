import * as types from '../types';
import axios from "axios";

export const registerUser = user => dispatch => {
    axios.post('/api/users', user).then(res => {
        console.log(res);
        // dispatch({
        //     type: types.ADD_TODO,
        //     payload: res.data
        // });
    });
}