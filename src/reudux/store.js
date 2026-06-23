import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer
})

export const persistor = persistStore(store)
