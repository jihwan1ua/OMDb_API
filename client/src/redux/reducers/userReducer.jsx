import { GET_USER, ADD_USER, ADD_USER_SUCCESS, ADD_USER_FAIL } from "../../constants/userConstants";

const initialStates = {
    account: {
        name: '',
        userName: '',
        email: '',
        password: ''
    }
}

export const userReducer = (state= initialStates, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, account: action.payload, loading: false}
        // case ADD_USER:
        //     return { ...state, account: action.payload, loading: false}
        case ADD_USER:
            return { ...state, account: [], loading: true }
        case ADD_USER_SUCCESS:
            return { ...state, account: action.payload, loading: false }
        case ADD_USER_FAIL:
            return {...state, error: action.payload, loading: false }
        default:
            return state;
    }
}
