import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { name: "pedro", age: 0, email: "email@gmail.com" } },
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        }
    }
})

export default userSlice.reducer;