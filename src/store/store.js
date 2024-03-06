import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Feature/authSlice';
import userReducer from '../Feature/userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer
    },
})