import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedPropState {
    elementId?: number
    nextId: number
}

const initialState: SelectedPropState = {nextId: 1};
export const selectedProps= createSlice({
    name: "selectedProps",
    initialState,
    reducers: {
        changeElement: (state, {payload: id}: PayloadAction<number | undefined>) => {
            state.elementId = id;
        },
        incrementId: (state) => {
            state.nextId += 1;
        }
    },
});

export const { changeElement, incrementId } = selectedProps.actions