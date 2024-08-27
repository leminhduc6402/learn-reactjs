import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "src/api/userApi";
import StorageKeys from "src/constants/storage-keys";

export const register = createAsyncThunk("user/register", async (payload: any) => {
    //call api to register
    console.log(payload);
    const user = await userApi.register(payload);

    //save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, user.data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(user.data.user));

    return user.data.user;
});
export const login = createAsyncThunk("user/login", async (payload: any) => {
    //call api to register
    console.log(payload);
    const user = await userApi.login(payload);

    //save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, user.data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(user.data.user));

    return user.data.user;
});

const currentUser = JSON.parse(localStorage.getItem(StorageKeys.USER) ?? "{}");

const userSlide = createSlice({
    name: "user",
    initialState: {
        current: currentUser,
        settings: {},
    },
    reducers: {
        logout(state) {
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            state.current = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.current = action.payload;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.current = action.payload;
        });
    },
});

const { actions, reducer } = userSlide;
export const { logout } = actions;
export default reducer;
