import axios from 'axios';
const URL = "http://localhost:3000/users";

export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"

export const login = form => {
    return async (dispatch) => {

        dispatch({
            type: LOGIN,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        try {
            const response = await axios({
                method: 'POST',
                url: URL + '/login',
                data: form
            })

            const access_token = response.data.access_token

            localStorage.setItem("access_token", access_token)

            dispatch({
                type: LOGIN,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })

        } catch (e) {

            dispatch({
                type: LOGIN,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: e.message
                }
            })

        }
    }
}

export const register = form => {
    return async (dispatch) => {

        dispatch({
            type: REGISTER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        try {
            const response = await axios({
                method: 'POST',
                url: URL + '/register',
                data: form
            })

            dispatch({
                type: REGISTER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })

        } catch (e) {

            dispatch({
                type: REGISTER,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: e.message
                }
            })

        }
    }
}