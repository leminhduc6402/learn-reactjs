import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import productApi from "src/api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";

function ListPage() {
    const [productList, setProductList] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 9,
        page: 1,
        total: 1,
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 9,
        _sort: "salePrice:ASC",
    });
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
                console.log(data, pagination);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
        setFilters((prevfilters) => ({
            ...prevfilters,
            _page: page,
        }));
    };
    const handleSortChange = (newValue: string) => {
        setFilters((prevfilters) => ({
            ...prevfilters,
            _sort: newValue,
        }));
    };
    const handleFiltersChange = (newFilters: any) => {
        setFilters((prevFilter) => ({
            ...prevFilter,
            ...newFilters,
        }));
    };
    return (
        <>
            <Box>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item sx={{ width: "250px" }}>
                            <Paper elevation={0}>
                                <ProductFilters filters={filters} onChange={handleFiltersChange} />
                            </Paper>
                        </Grid>
                        <Grid item sx={{ flex: "1 1 0" }}>
                            <Paper elevation={0}>
                                <ProductSort
                                    currentSord={filters._sort}
                                    onChange={handleSortChange}
                                />
                                {loading ? (
                                    <ProductSkeletonList length={9} />
                                ) : (
                                    <>
                                        <ProductList data={productList} />
                                    </>
                                )}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexFlow: "row nowrap",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                        paddingBottom: "20px",
                                    }}
                                >
                                    <Pagination
                                        color="primary"
                                        count={Math.ceil(pagination.total / pagination.limit)}
                                        page={pagination.page}
                                        onChange={handlePageChange}
                                    />
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default ListPage;
