import { createSlice } from "@reduxjs/toolkit";

const songSlices = createSlice({
    name : 'songs',
    initialState:{
        currentSong: {},
        color:['purple', 'indigo','orange','green', 'blue', 'aqua']
    },
    reducers : {
        addCurrent(state, action) {
            state.currentSong = action.payload
            // state.push(action.payload);
        }
    }
});

export const songsList = songSlices.reducer;
export const  {addCurrent} = songSlices.actions;