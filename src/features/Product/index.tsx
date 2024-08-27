import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import { Box } from "@mui/material";

function ProductFeature() {
    return (
        <Box pt={4}>
            <Routes>
                <Route path={"/"} element={<ListPage />} />
                {/* <Route path=":id" element={<ProductDetail />} /> */}
            </Routes>
        </Box>
    );
}
export default ProductFeature;
