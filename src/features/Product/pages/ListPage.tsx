import { Box, Container, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import productApi from "src/api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";

function ListPage() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
                setProductList(data);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
            setLoading(true);
        })();
    }, []);
    return (
        <>
            <Box>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item sx={{ width: "250px" }}>
                            <Paper elevation={0}>Left column</Paper>
                        </Grid>
                        <Grid item sx={{ flex: "1 1 auto" }}>
                            <Paper elevation={0}>
                                {loading ? <ProductSkeletonList /> : <>Product List</>}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default ListPage;
