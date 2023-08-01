// actions for search component.
import axios from 'axios';
// search actions is just 2, do search, and retrieve search
import { GET_SEARCH_REQUEST, SET_SEARCH_REQUEST } from '../../constants/searchAPIConstants';

const APIKey = 'cd01f7ab';

// text is whatever is on the searchBar
// takes input, return the text as a payload defined as searchReducer
// dispatch is coming from the redux-thunk defined in the store as middleware
export const setSearch = text => dispatch => {
    dispatch({
        type: SET_SEARCH_REQUEST,
        payload: text 
    })
};

export const getSearch = text => dispatch => {
    // try{
    //     const { data } = axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}&type=movie`)

    //     dispatch({
    //         type: GET_SEARCH_REQUEST,
    //         payload: data
    //     })
    // }catch(error) {
    //     dispatch({
    //         type: GET_SEARCH_REQUEST,
    //         payload: error.response && error.response.data.message
    //     })
    // }

    // can't use the above method as the function isn't async. And the payload is undefined, looks like when axios get is called
    // the data might not be available as `await` keyword is not used. So I'm using the non-async method
    // also narrowing response.data.Search, as response.data was giving other results, such as Total results, response, etc.
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}&type=movie`)
        .then(response => dispatch({
            type: GET_SEARCH_REQUEST,
            payload: response.data.Search
        }))
        .catch(err => console.log(err))
}