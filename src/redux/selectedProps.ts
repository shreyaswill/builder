import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedPropState {
    element?: string
    lastId: number
}

const initialState: SelectedPropState = {lastId: 0};
export const selectedProps= createSlice({
    name: "selectedProps",
    initialState,
    reducers: {
        changeElement: (state, {payload: id}: PayloadAction<string | undefined>) => {
            state.element = id;
        },
        incrementId: (state) => {
            state.lastId += 1;
        }
    },
});

export const { changeElement, incrementId } = selectedProps.actions