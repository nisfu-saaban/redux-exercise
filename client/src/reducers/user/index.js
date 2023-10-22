import {
    LOGIN,
    REGISTER
} from '../../axios/userAxios'

const initialState = {

    loginResult: false,
    loginLoading: false,
    loginError: false,

    registerResult: false,
    registerLoading: false,
    registerError: false,

}

const user = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                loginLoading: action.payload.loading,
                loginResult: action.payload.data,
                loginError: action.payload.errorMessage
            }

        case REGISTER:
            return {
                ...state,
                registerLoading: action.payload.loading,
                registerResult: action.payload.data,
                registerError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default user