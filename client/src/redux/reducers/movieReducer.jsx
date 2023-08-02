import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS, GET_MOVIE_FAIL, ADD_MOVIE_TO_MY_LIST, ADD_MOVIE_TO_MY_LIST_SUCCESS, ADD_MOVIE_TO_MY_LIST_FAIL, DELETE_MOVIE_FROM_MY_LIST, DELETE_MOVIE_FROM_MY_LIST_SUCCESS, DELETE_MOVIE_FROM_MY_LIST_FAIL } from "../../constants/movieConstants"
import { deleteMovieFromMyList } from "../actions/movieActions"

export const movieReducer = (state={ movie: [] }, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return { loading: true, success: false, movies: [] }
        case GET_MOVIE_SUCCESS:
            return { loading: false, success: true, movies: action.payload }
        case GET_MOVIE_FAIL:
            return { loading: false, success: false, error: action.payload }
        // following are for adding/deleting movie to user list
        case ADD_MOVIE_TO_MY_LIST:
            return { loading: true, success: false, movies: [] }
        case ADD_MOVIE_TO_MY_LIST_SUCCESS:
            return { loading: false, success: true, movies: action.payload }
        case ADD_MOVIE_TO_MY_LIST_FAIL:
            return { loading: false, success: false, error: action.payload }
        case DELETE_MOVIE_FROM_MY_LIST:
            return { loading: true, success: false, movies: [] }
        case DELETE_MOVIE_FROM_MY_LIST_SUCCESS:
            return { loading: false, success: true, movies: action.payload }
        case DELETE_MOVIE_FROM_MY_LIST_FAIL:
            return { loading: false, success: false, error: action.payload }
        default:
            return state;
    }
}