import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

const DEFAULT_PROPS = {
    height: 100,
    width: 100,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: "white",
    children: [] as number[],
    borderWidth: 1,
    borderColor: "black",
}

//{property: type}
export type ElementProps = typeof DEFAULT_PROPS & {parent?: number};
//[property1, property2,...]
export type ElementKeys = keyof ElementProps;
export type BuildState = {
    [userId: string] : {//build for each user
        roots: number[];//all elements at the root level (main level) parent component - has only IDs
        elements: { [key: string]: ElementProps };// child element - master list of all elements - use the ROOT IDa and go find it's elements
    }
};

const initialState: BuildState = {};
export const userBuild = createSlice({
    name: "elementProps",
    initialState,
    reducers: {
        updateProperty: <K extends ElementKeys> (state: BuildState, 
            { payload: {userId, id, property, value} }: PayloadAction<{userId: string, id: number, property: K, value: ElementProps[K]}>) => {
            state[userId].elements[id][property] = value;
        },
        addElement: (state, { payload: {userId, pid, id } }: PayloadAction<{ userId: string, pid?: number; id: number }>) => {
            const props = {...DEFAULT_PROPS, parent: pid};//get default and add parent if exists
            state[userId].elements[id] = props;
            if (!pid) state[userId].roots.push(id); //when no parent, sooo it's root
            else state[userId].elements[pid].children.push(id);
        },
        deleteElement: (state, { payload: {userId, id} }) => {
            const parentId = state[userId].elements[id].parent;
            if (parentId) state[userId].elements[parentId].children = state[userId].elements[parentId].children.filter((childId) => id !== childId);
            else state[userId].roots = state[userId].roots.filter((pid) => pid !== id);
            //Remove children of the selected element
            deleteChildrenRecusively(state, userId, id);
        },
        addBuild: (state, {payload: userId}) => {
            if (!state[userId]) {
                state[userId] = {
                    roots: [],
                    elements: {}
                }
            }
        }
    },
});

const deleteChildrenRecusively = (state: BuildState, userId: string, id: number) => {
    const c = state[userId].elements[id]?.children || [];
    c.forEach((cid) => deleteChildrenRecusively(state, userId, cid));
    delete state[userId].elements[id];
};

export const {addBuild} = userBuild.actions;
export const updateElement = createAsyncThunk<void,
    {id: number, value: ElementProps[keyof ElementProps], property: keyof ElementProps},
    {state: RootState}//Main store
>("build/updatePropertyThunk",
    async ({id, value, property}, { getState, dispatch }) => {
        const userId = getState().selected.currentUserId;
        if (userId)
            dispatch(userBuild.actions.updateProperty({userId, id, property, value}));
    }
);

export const addElement = createAsyncThunk<void, {pid?: number; id: number}, {state: RootState}>(
    "build/addElementThunk",
    async ({pid, id}, { getState, dispatch }) => {
        const userId = getState().selected.currentUserId;//Get user id from selected slice
        if (userId)                                      //call reducer function if userId exists
            dispatch(userBuild.actions.addElement({userId, pid, id}));
    }
);

export const deleteElement = createAsyncThunk<void, number, {state: RootState}>(
    "build/deleteElementThunk",
    async (id, { getState, dispatch }) => {
        const userId = getState().selected.currentUserId;//Get user id from selected slice
        if (userId)                                     //call reducer function if userId exists
            dispatch(userBuild.actions.deleteElement({userId, id}));
    }
);

export const getSelectedEleProps = (state: RootState) => {
    const userId = state.selected.currentUserId;
    if (userId) {
        const selectedElement = state.selected.users[userId].selectedId;
        if (selectedElement)
            return state.build[userId].elements[selectedElement];
    }
    return;
}
export const getEleProps = (state: RootState, id: number) => {
    const userId = state.selected.currentUserId;
    if (userId) {
        return state.build[userId].elements[id];
    }
    return;
}
export const getRoots = (state: RootState) => {
    const userId = state.selected.currentUserId;
    if (userId)
        return state.build[userId].roots;
    return;
}