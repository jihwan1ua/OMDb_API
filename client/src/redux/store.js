// import { legacy_createStore as createStore} from 'redux'
import { combineReducers, applyMiddleware } from "redux";
import { createStore } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieReducer } from "./reducers/movieReducer"; 
// import rootReducer from './reducers';

const reducer = combineReducers({
    movieList: movieReducer
});

const middleware = [thunk];

const initialState = {};

const store = createStore(
    // rootReducer,
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;