import { configureStore } from "@reduxjs/toolkit";
import { elementProps } from "./elementProps";

export const store = configureStore({
    reducer: elementProps.reducer
});
