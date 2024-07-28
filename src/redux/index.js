import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import hotReducer from "./reducers/hotReducer";
import iceReducer from "./reducers/icedReducer";

const root = combineReducers({
    hot: hotReducer,
    iced: iceReducer,
})

const store = createStore(root, applyMiddleware(thunk))

export default store