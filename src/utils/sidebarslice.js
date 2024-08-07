import { createSlice } from "@reduxjs/toolkit";

const sidebarslice=createSlice({
    name:'sidebar',
    initialState:{
        isMenuopen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuopen=!state.isMenuopen

        }
    }
});
export const {toggleMenu}=sidebarslice.actions
export default sidebarslice.reducer