import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface SelectedSatus {
    currentUserId?: string;
    users: {
        [userId: string]: {
            //gives you logged in user details and build (one build per user)
            selectedId?: number;
            nextId: number;
        };
    };
}

const initialState: SelectedSatus = {users: {}};
export const selected = createSlice({
    name: "selected",
    initialState,
    reducers: {
        changeElement: (state, {payload: id}: PayloadAction<number | undefined>) => {
            if (state.currentUserId)
                state.users[state.currentUserId].selectedId = id;
        },
        incrementId: (state) => {
            if (state.currentUserId)
                state.users[state.currentUserId].nextId += 1;
        },
        changeUser: (state, {payload: id}: PayloadAction<string | undefined>) => {
            if (id && !state.users[id]) {
                state.users[id] = {nextId: 1}
            }
            state.currentUserId = id;
        }
    },
});


export const getSelectedElementId = (state: RootState): number | undefined => {
    const selectedState = state.selected;
    if (selectedState.currentUserId)
        return selectedState.users[selectedState.currentUserId].selectedId;
    return;
}

export const getSelectedIds = (state: RootState) => {
    const selectedState = state.selected;
    if (selectedState.currentUserId)
        return selectedState.users[selectedState.currentUserId];
    return;
}

export const { changeElement, incrementId, changeUser } = selected.actions