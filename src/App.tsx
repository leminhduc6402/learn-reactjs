import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AlbumFeature from "./features/Album";
// import { Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CounterFeature from "./features/Counter";
import TodoFeature from "./features/Todo";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<CounterFeature />} />
                <Route path="/todos/*" element={<TodoFeature />} />
                <Route path="/albums" element={<AlbumFeature />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <h1>Footer</h1>
        </div>
    );
}

export default App;
