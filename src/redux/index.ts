import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userBuild } from "./build";
import { selected } from "./selected";
import { users } from "./users";

const persistConfig = {
    key: "root",
    storage,
};
const rootReducer = combineReducers({
    users: users.reducer,
    build: userBuild.reducer,
    selected: selected.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    //avoid persisting persist/PERSIST created automatically by persist. This is a manual config to not throw error
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: { ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]}
    }),
});

export const persistor = persistStore(store);
export type RootState = Omit<ReturnType<typeof store.getState>, "_persist">;
export type DispatchType = typeof store.dispatch;
