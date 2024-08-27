import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
