import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS, GET_MOVIE_FAIL } from "../../constants/movieConstants"

export const movieReducer = (state={ movie: [] }, action) => {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return { loading: true, success: false, movies: [] }
        case GET_MOVIE_SUCCESS:
            return { loading: false, success: true, movies: action.payload }
        case GET_MOVIE_FAIL:
            return { loading: false, success: false, error: action.payload }
        default:
            return state;
    }
}