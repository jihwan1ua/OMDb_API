// actions for handling OBDb api.

import { GET_MOVIE_FAIL, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from "../../constants/movieConstants"

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

export default getListMovies