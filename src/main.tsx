import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </>,
);
