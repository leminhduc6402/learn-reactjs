import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AlbumFeature from "./features/Album";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CounterFeature from "./features/Counter";
import ProductFeature from "./features/Product";
import TodoFeature from "./features/Todo";

function App() {
    // const { enqueueSnackbar } = useSnackbar();
    // const showNoti = () => {
    //     enqueueSnackbar("Success !!!", { variant: "success" });
    // };
    return (
        <div className="App">
            <Header />
            {/* <Button onClick={showNoti}>Show Noti</Button> */}
            <Routes>
                <Route path="/" element={<CounterFeature />} />
                <Route path="/todos/*" element={<TodoFeature />} />
                <Route path="/products/*" element={<ProductFeature />} />
                <Route path="/albums" element={<AlbumFeature />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <h1>Footer</h1>
        </div>
    );
}

export default App;
