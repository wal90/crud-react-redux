import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice"

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export type RootState = ReturnType<typeof store.getState> // retorna el typo que tiene la funcion
export type AppDispatch = typeof store.dispatch