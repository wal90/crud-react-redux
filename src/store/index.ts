import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer from "./users/slice"

// cada funcion se ejecuta en tres momentos diferentes... recibe la store, una forma para ir a la siguiente y luego la accion
const persistanceLocalStoregeMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()))
}

const syncWithDataBaseMIddleware: Middleware = store => next => action => {
    const { type, payload } = action
   next(action) 
}

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [persistanceLocalStoregeMiddleware, syncWithDataBaseMIddleware]
})

export type RootState = ReturnType<typeof store.getState> // retorna el typo que tiene la funcion
export type AppDispatch = typeof store.dispatch