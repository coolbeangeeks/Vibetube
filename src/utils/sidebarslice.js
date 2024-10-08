import { createSlice } from "@reduxjs/toolkit";

const sidebarslice=createSlice({
    name:'sidebar',
    initialState:{
        isMenuopen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuopen=!state.isMenuopen

        },
        closeMenu:(state)=>{
            state.isMenuopen=false

        }
    }
});
export const {toggleMenu,closeMenu}=sidebarslice.actions
export default sidebarslice.reducer