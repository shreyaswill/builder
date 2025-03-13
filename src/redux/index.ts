import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { usernameSlice } from "./usernameSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        username: usernameSlice.reducer
    }
});
