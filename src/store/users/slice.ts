import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string;
    email: string;
    github: string
}

export interface UserWhithId extends User {
    id: string;
}

const initialState: UserWhithId[] = [{
    
        id:"1",
        name: "Walter Martinez",
        email: "walteromartinez90@gmail.com",
        github: "wal90",
      },
      {
        id: "2",
        name: "Lena Whitehouse",
        email: "lena_whitehouse@gmail.com",
        github: "lenaWhite",
      },
      {
        id: "3",
        name: "Phil Less",
        email: "philless@gmail.com",
        github: "pilless07",
      },
      {
        id: "4",
        name: "John Camper",
        email: "johncamper0007@gmail.com",
        github: "john0007",
      },
      {
        id: "5",
        name: "Max Balmoore",
        email: "maxbalmoore01@gmail.com",
        github: "maxBalmoore",
      },
      {
        id: "6",
        name: "Peter Moore",
        email: "petermoore@gmail.com",
        github: "petermoore",
     
      },
      {
        id: "7",
        name: "Joe Sachs",
        email: "joesachs20@gmail.com",
        github: "joesachs20",
      
},]
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer