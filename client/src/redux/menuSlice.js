import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    isProfileMenuOpen: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setsidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        setprofilemenu: (state) => {
            state.isProfileMenuOpen = !state.isProfileMenuOpen
        }
    }
})

export default menuSlice.reducer
export const { setsidebar, setprofilemenu } = menuSlice.actions