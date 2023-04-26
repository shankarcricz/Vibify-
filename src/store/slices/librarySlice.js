import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
    name : 'library',
    initialState:{
        stack: [],
    },
    reducers : {
        addToStack(state, action) {
            state.stack.push(action.payload);
        }
    }
});

export const library = librarySlice.reducer;
export const {addToStack} = librarySlice.actions 