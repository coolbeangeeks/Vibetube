import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";

const store =configureStore({
    reducer:{
        sidebar:sidebarslice
    }
});

export default store