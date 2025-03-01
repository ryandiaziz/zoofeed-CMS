import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import menuReducer from "./menuSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        menu: menuReducer
    }
})

export default store