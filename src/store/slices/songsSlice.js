import { createSlice } from "@reduxjs/toolkit";

const songSlices = createSlice({
    name : 'songs',
    initialState:[],
    reducers : {
        addsongs(state, action) {
            state.pop()
            state.push(action.payload)
            // state.push(action.payload);
        }
    }
});

export const songsList = songSlices.reducer;
export const  {addsongs} = songSlices.actions;