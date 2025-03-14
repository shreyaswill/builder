import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ElementProps {
    height: number
    width: number
    backgroundColor: string
    parent?: number
    children: number[]
}
export type ElementPropState = {
    roots: number[];
    elements: {[key: string]: ElementProps};
}

const initialState:ElementPropState  = {
    roots: [],
    elements: {}
};

export const elementProps = createSlice({
    name: "elementProps",
    initialState,
    reducers: {
        changeHeight: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
            state.elements[id].height = value;
        },
        changeWidth: (state, action: PayloadAction<{id: number, value: number}>) => {
            state.elements[action.payload.id].width = action.payload.value;
        },
        changeBackground: (state, {payload: {id, value}}: PayloadAction<{id: number, value: string}>) => {
            state.elements[id].backgroundColor = value;
        },
        addElement: (state, {payload: {pid, id}}: PayloadAction<{pid?: number, id: number}>) => {
            state.elements[id] = { //default props
                height: 100,
                width: 100,
                backgroundColor: 'white',
                children: [],
                parent: pid
            }
            if (!pid)
                state.roots.push(id); //when no parent, it's root
            else
                state.elements[pid].children.push(id);
        },
        deleteElement: (state, {payload: id}) => {
            const parentId = state.elements[id].parent;
            if (parentId)
                state.elements[parentId].children = state.elements[parentId].children.filter(childId => id !== childId);
            else
                state.roots = state.roots.filter(pid => pid !== id);
            //Remove children of the selected element
            deleteChildrenRecusively(state, id);
        }
    },
});

const deleteChildrenRecusively = (state: ElementPropState, id: number) => {
    const c = state.elements[id]?.children || [];
    c.forEach(cid => deleteChildrenRecusively(state, cid));
    delete state.elements[id];
}

export const { changeHeight, changeWidth, changeBackground, addElement, deleteElement } = elementProps.actions