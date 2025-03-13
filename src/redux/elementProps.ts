import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ElementProps {
    height: number,
    width: number,
    backgroundColor: string
}

const initialState: {[key: string]: ElementProps} = {};

export const elementProps = createSlice({
    name: "elementProps",
    initialState,
    reducers: {
        changeHeight: (state, {payload: {id, value}}: PayloadAction<{id: string, value: number}>) => {
            state[id].height = value;
        },
        changeWidth: (state, action: PayloadAction<{id: string, value: number}>) => {
            state[action.payload.id].width = action.payload.value;
        },
        changeBackground: (state, {payload: {id, value}}: PayloadAction<{id: string, value: string}>) => {
            state[id].backgroundColor = value;
        }
    },
});

export const { changeHeight, changeWidth, changeBackground } = elementProps.actions