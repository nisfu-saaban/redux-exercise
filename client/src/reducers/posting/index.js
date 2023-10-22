import {
    GET_ALL_POST,
    GET_POST_BY_USER,
    CREATE_POST_BY_USER,
    UPDATE_POST_BY_USER,
    DELETE_POST_BY_USER
} from '../../axios/PostingAxios'

const initialState = {

    getAllPostResult: false,
    getAllPostLoading: false,
    getAllPostError: false,

    getPostResult: false,
    getPostLoading: false,
    getPostError: false,

    createPostLoading: false,
    createPostResult: false,
    createPostError: false,

    updatePostLoading: false,
    updatePostResult: false,
    updatePostError: false,

    deletePostLoading: false,
    deletePostResult: false,
    deletePostError: false

}

const posting = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POST:
            return {
                ...state,
                getAllPostLoading: action.payload.loading,
                getAllPostResult: action.payload.data,
                getAllPostError: action.payload.errorMessage
            }

        case GET_POST_BY_USER:
            return {
                ...state,
                getPostLoading: action.payload.loading,
                getPostResult: action.payload.data,
                getPostError: action.payload.errorMessage
            }

        case CREATE_POST_BY_USER:
            return {
                ...state,
                createPostLoading: action.payload.loading,
                createPostResult: action.payload.data,
                createPostError: action.payload.errorMessage
            }

        case UPDATE_POST_BY_USER:
            return {
                ...state,
                updatePostLoading: action.payload.loading,
                updatePostResult: action.payload.data,
                updatePostError: action.payload.errorMessage
            }

        case DELETE_POST_BY_USER:
            return {
                ...state,
                deletePostLoading: action.payload.loading,
                deletePostResult: action.payload.data,
                deletePostError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default posting