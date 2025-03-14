import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ElementProps {
    height: number,
    width: number,
    backgroundColor: string
}
export type ElementPropState = {[key: string]: ElementProps};

const initialState:ElementPropState  = {};

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
        },
        addElement: (state, {payload}) => {
            state[payload] = {
                height: 100,
                width: 100,
                backgroundColor: 'white'
            }
        },
        deleteElement: (state, {payload}) => {
            delete state[payload];
        }
    },
});

export const { changeHeight, changeWidth, changeBackground, addElement, deleteElement } = elementProps.actions