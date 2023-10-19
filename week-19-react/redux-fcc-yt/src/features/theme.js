import { createSlice } from '@reduxjs/toolkit'

const initilaStateValue=''

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initilaStateValue },
    reducers:{
        changeColor:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {changeColor}=themeSlice.actions;

export default themeSlice.reducer;