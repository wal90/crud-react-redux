import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice"

// cada funcion se ejecuta en tres momentos diferentes... recibe la store, una forma para ir a la siguiente y luego la accion
const persistanceLocalStoregeMiddleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()))
}

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [persistanceLocalStoregeMiddleware]
})

export type RootState = ReturnType<typeof store.getState> // retorna el typo que tiene la funcion
export type AppDispatch = typeof store.dispatch