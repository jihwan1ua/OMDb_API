// actions for handling user account and registration
import { GET_USER, ADD_USER } from "../../constants/userConstants";
import axios from 'axios';

// make get call to the user table to retrieve all records
export const getUser = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/user/')
        .then(response => dispatch({
            type: GET_USER,
            payload: response.data
        }))
        .catch(err => console.log(err))
};

// make post call to user table to add user to db
export const addUser = (userInfo) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/user/', userInfo)
        .then(response => dispatch({
            type: ADD_USER,
            payload: response.data
        }))
        .catch(err => console.log(err))
}