import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

import todos from "./todos.js"
import storage from "redux-persist/es/storage";

const persistReducerConfig = {
	key:"data",
	storage
}

const reducer = combineReducers({
	todos:persistReducer(persistReducerConfig, todos)
})

export default reducer