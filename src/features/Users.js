import { createSlice} from "@reduxjs/toolkit";
import {UsersData} from '../FakeData';

export const userSlice = createSlice({
    name: "users",
    initialState: {value: UsersData},
    reducers: {
        addUser: (state, action) => {
            // For adding a user in a second
        }
    }
});

export default userSlice.reducer;