// import { legacy_createStore as createStore} from 'redux'
import { combineReducers, applyMiddleware } from "redux";
import { createStore } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieReducer } from "./reducers/movieReducer";
import { searchReducer } from "./reducers/searchReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    movieList: movieReducer,
    searchList: searchReducer,
    userList: userReducer
});

// middlware and redux-thunk will return functions within redux to allow app to be asynchoronous, like ajax request.
const middleware = [thunk];

const initialState = {};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;