import { configureStore } from "@reduxjs/toolkit";
import { elementProps } from "./elementProps";
import { selectedProps } from "./selectedProps";

export const store = configureStore({
    reducer: {
        eprops: elementProps.reducer,
        selected: selectedProps.reducer
    }
});
