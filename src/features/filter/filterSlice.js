import { createSlice } from "@reduxjs/toolkit";


// setup initialState

const initialState = {
    status: 'All',
    colors: []
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        statusChange: (state, action)=>{
            state.status = action.payload
        },
        colorChange: (state, action)=>{
            const colorExists = state.colors.includes(action.payload);

            if(colorExists){
                state.colors = state.colors.filter((color)=> color !== action.payload )
            } else {
                state.colors = [...state.colors, action.payload];
            }
        },
    },
});



export const {statusChange, colorChange} = filterSlice.actions;
export default filterSlice.reducer;