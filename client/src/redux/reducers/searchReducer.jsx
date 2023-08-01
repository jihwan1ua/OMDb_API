import { GET_SEARCH_REQUEST, SET_SEARCH_REQUEST } from "../../constants/searchAPIConstants";

// the following states will define what SearchBar component can be capable of
// text will be from the SearchBar component text which will be input by User
// result_movies will be the array of movies that will be sent back from the payload from the api request
// loading is the state of loading, in case of api request takes long, due to their server, etc. the loading will play animation (optional)
// result_movie will be a single array return in case our search from api request only sends back 1 elem array.
const initialStates = {
    text: '',
    result_movies: [],
    loading: false,
    result_movie: []
}

// takes state scope, and actions as param
export const searchReducer = (state= initialStates, action) => {
    switch (action.type) {
        case GET_SEARCH_REQUEST:
            return { ...state, result_movies: action.payload, loading: false}
        case SET_SEARCH_REQUEST:
            return { ...state, text: action.payload, loading: false}
        default:
            return state;
    }
}

export default searchReducer