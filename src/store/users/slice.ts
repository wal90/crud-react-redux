import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string;
    email: string;
    github: string
}
export const usersSlice = createSlice({
    name: 'users',
    initialState: ,
    reducers: {}
})