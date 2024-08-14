import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlise";

const rootReducer = {
    counter: counterReducer,
};
const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
