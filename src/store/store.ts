import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlise";
import userReducer from "../features/Auth/userSlide";

const rootReducer = {
    counter: counterReducer,
    user: userReducer,
};
const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
