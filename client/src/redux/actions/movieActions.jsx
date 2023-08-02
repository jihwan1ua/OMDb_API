// actions for handling OBDb api.
import { GET_MOVIE_FAIL, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS, ADD_MOVIE_TO_MY_LIST, ADD_MOVIE_TO_MY_LIST_SUCCESS, ADD_MOVIE_TO_MY_LIST_FAIL, DELETE_MOVIE_FROM_MY_LIST, DELETE_MOVIE_FROM_MY_LIST_SUCCESS, DELETE_MOVIE_FROM_MY_LIST_FAIL } from "../../constants/movieConstants";
import axios from 'axios';

// get all movies data from api. Will be called from componenets, movieList
export const getListMovies = () => async (dispatch) => {
    try{
        dispatch({
            type: GET_MOVIE_REQUEST
        })

        const { data } = await axios.get('http://127.0.0.1:8000/api/movies/')

        dispatch({
            type: GET_MOVIE_SUCCESS,
            payload: data
        })
    }catch(error) {
        dispatch({
            type: GET_MOVIE_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}

// pass array of movieSelected
export const addMovieToMyList = (movieSelected) => async (dispatch) => {
    // make a POST call to DB with the selected movie
    try {
        dispatch({
            type: ADD_MOVIE_TO_MY_LIST
        })

        const { data } = await axios.post('http://127.0.0.1:8000/api/movies/', movieSelected)

        dispatch({
            type:ADD_MOVIE_TO_MY_LIST_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: ADD_MOVIE_TO_MY_LIST_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}

export const deleteMovieFromMyList = (id) => async (dispatch) => {
    // make a DELETE call to DB with the selected movie
    // change id string to number type
    try {
        dispatch({
            type: DELETE_MOVIE_FROM_MY_LIST
        })

        // delete the entry from DB then call get to fetch the new user movie list
        await axios.delete(`http://127.0.0.1:8000/api/movies/${+id}`)

        const { data } = await axios.get('http://127.0.0.1:8000/api/movies/')

        dispatch({
            type: DELETE_MOVIE_FROM_MY_LIST_SUCCESS,
            payload: data
        })

    }catch(error) {
        dispatch({
            type: DELETE_MOVIE_FROM_MY_LIST_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}

export default getListMovies; addMovieToMyList(); deleteMovieFromMyList()