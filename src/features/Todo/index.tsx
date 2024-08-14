import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "../../components/NotFound";

function TodoFeature() {
    return (
        <>
            <h2>Todo Feature</h2>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path=":todoId" element={<DetailPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default TodoFeature;
