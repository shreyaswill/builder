import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ElementProps {
    height: number
    width: number
    backgroundColor: string
    parent?: number
    children: number[]
    paddingTop?: number;
    paddingLeft?: number;
    paddingBottom?: number;
    paddingRight?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
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

        
        changePaddingLeft: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].paddingLeft = value; // Update padding for the left side
        },
        changePaddingRight: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].paddingRight = value; // Update padding for the right side
        },
        changePaddingTop: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].paddingTop = value; // Update padding for the topp  side
        },
        changePaddingBottom: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].paddingBottom = value; // Update padding for the bottom  side
        },



        changeMarginLeft: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].marginLeft = value; 
        },
        changeMarginRight: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].marginRight = value; 
        },
        changeMarginTop: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].marginTop = value; 
        },
        changeMarginBottom: (state, {payload: {id, value}}: PayloadAction<{id: number, value: number}>) => {
                state.elements[id].marginBottom = value; 
        },

        
        
        changeBackground: (state, {payload: {id, value}}: PayloadAction<{id: number, value: string}>) => {
            state.elements[id].backgroundColor = value;
        },
        addElement: (state, {payload: {pid, id}}: PayloadAction<{pid?: number, id: number}>) => {
            state.elements[id] = { //default props
                height: 100,
                width: 100,
                paddingLeft: 100,
                paddingRight: 100,
                paddingTop: 100,
                paddingBottom: 100,
                marginLeft: 100,
                marginRight: 100,
                marginTop: 100,
                marginBottom: 100,
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

export const { changeHeight, changeWidth, changeBackground, changeMarginLeft, changeMarginRight, changeMarginTop, changeMarginBottom, addElement, deleteElement, changePaddingLeft, changePaddingRight, changePaddingTop, changePaddingBottom } = elementProps.actions