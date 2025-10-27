import { configureStore } from "@reduxjs/toolkit";
import formReducer from './formSlice'

export const storeForm = configureStore({
    reducer: {
        form: formReducer,
    }
})

export type RootState = ReturnType<typeof storeForm.getState>;
export type AppDispatch = typeof storeForm.dispatch;