import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './Slices/SidebarSlice';
import userdataReducer from './Slices/AuthUser';
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: userdataReducer,
  },
});

export default store ;