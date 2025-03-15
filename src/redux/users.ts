import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDetails {
    userid: string
    email?: string
    password: string
}
type UsersState = { [key: string]: UserDetails };
const initialState: UsersState = {};
export const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        register: (state, {payload}: PayloadAction<UserDetails>) => {
            state[payload.userid] = payload;
        }
    },
});

export const { register } = users.actions