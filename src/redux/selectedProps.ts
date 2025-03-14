import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedProps {
    element?: string
}

const initialState: SelectedProps = {};
export const selectedProps = createSlice({
    name: "selectedProps",
    initialState,
    reducers: {
        changeElement: (state, {payload: id}: PayloadAction<string>) => {
            state.element = id;
        }
    },
});

export const { changeElement } = selectedProps.actions