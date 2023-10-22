import axios from 'axios';
const URL = "http://localhost:3000/postings";

const access_token = localStorage.getItem("access_token");

const instanceAxios = axios.create({
    baseURL: URL,
    headers: {
        access_token: `${access_token}`,
        "Content-Type": "application/json",
    },
});

export const GET_ALL_POST = "GET_ALL_POST"
export const GET_POST_BY_USER = "GET_POST_BY_USER"
export const CREATE_POST_BY_USER = "CREATE_POST_BY_USER"
export const UPDATE_POST_BY_USER = "UPDATE_POST_BY_USER"
export const DELETE_POST_BY_USER = "DELETE_POST_BY_USER"

export const getAllPost = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_ALL_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        try {

            let response = await instanceAxios({
                method: 'GET',
                url: URL,
            })

            dispatch({
                type: GET_ALL_POST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })

        } catch (e) {
            dispatch({
                type: GET_ALL_POST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: e.message
                }
            })
        }

    }
}

export const getPostByUser = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_ALL_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        try {

            let postings = await instanceAxios({
                method: 'GET',
                url: URL + '/post',
            })

            dispatch({
                type: GET_ALL_POST,
                payload: {
                    loading: false,
                    data: postings.data,
                    errorMessage: false
                }
            })

        } catch (e) {
            dispatch({
                type: GET_ALL_POST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: e.message
                }
            })
        }
    }
}

export const updatePost = (id, form) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_POST_BY_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        try {

            const response = await instanceAxios({
                method: 'PATCH',
                url: URL + '/update' + id,
                data: form
            })

            dispatch({
                type: UPDATE_POST_BY_USER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })

        } catch (e) {
            dispatch({
                type: UPDATE_POST_BY_USER,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: e.message
                }
            })
        }
    }
}

export const createPost = (form) => {
    return async (dispatch) => {
        dispatch({
            type: CREATE_POST_BY_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        try {

            const response = await instanceAxios({
                method: 'POST',
                url: URL + '/create',
                data: form
            })

            dispatch({
                type: CREATE_POST_BY_USER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })

        } catch (e) {
            dispatch({
                type: CREATE_POST_BY_USER,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: e.message
                }
            })
        }
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        dispatch({
            type: CREATE_POST_BY_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        try {

            const response = await instanceAxios({
                method: 'DELETE',
                url: URL + id,
            })

            dispatch({
                type: DELETE_POST_BY_USER,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })

        } catch (e) {
            dispatch({
                type: DELETE_POST_BY_USER,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: e.message
                }
            })
        }
    }
}