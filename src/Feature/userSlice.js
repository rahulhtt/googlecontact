import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('user'),
    },
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload;
        },
        clearUser: (state) => {
            state.token = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;