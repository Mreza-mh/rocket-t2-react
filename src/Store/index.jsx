import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './Slices/SidebarSlice'
export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    },
});

export default store ;