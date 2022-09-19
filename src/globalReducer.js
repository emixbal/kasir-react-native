import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// screens
import { reducers as home } from "./screens/Home";

const combine = combineReducers({
    home,
})

const store = createStore(
    combine,
    applyMiddleware(thunk, logger)
);

export default store;