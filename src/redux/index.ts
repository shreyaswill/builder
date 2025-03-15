import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { elementProps } from "./elementProps";
import { selectedProps } from "./selectedProps";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, elementProps.reducer);

export const store = configureStore({
    reducer: {
        eprops: persistedReducer,
        selected: selectedProps.reducer,
    },
});

export const persistor = persistStore(store);
