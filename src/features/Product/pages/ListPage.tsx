import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import productApi from "src/api/productApi";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";
import FilterViewer from "../components/FilterViewer";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

function ListPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: params._page || 1,
            _limit: params._limit || 9,
            _sort: params._sort || "salePrice:ASC",
            isPromotion: params.isPromotion === "true",
            isFreeShip: params.isFreeShip === "true",
        };
    }, [location.search]);
    const [productList, setProductList] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 9,
        page: 1,
        total: 1,
    });
    // const [filters, setFilters] = useState();
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
                console.log(data, pagination);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
            setLoading(false);
        })();
    }, [queryParams]);

    useEffect(() => {
        const newFilters = { ...queryParams };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(newFilters),
        });
    }, [queryParams, navigate, location]); // location

    const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
        console.log(e);
        // setFilters((prevfilters) => ({
        //     ...prevfilters,
        //     _page: page,
        // }));
        const filters = {
            ...queryParams,
            _page: page,
        };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };
    const handleSortChange = (newValue: string) => {
        // setFilters((prevfilters) => ({
        //     ...prevfilters,
        //     _sort: newValue,
        // }));
        const filters = {
            ...queryParams,
            _sort: newValue,
        };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };
    const handleFiltersChange = (newFilters: any) => {
        // setFilters((prevFilter) => ({
        //     ...prevFilter,
        //     ...newFilters,
        // }));
        const filters = {
            ...queryParams,
            ...newFilters,
        };
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    };
    const setNewFilters = (newFilters: any) => {
        // setFilters(newFilters);
        navigate({
            pathname: location.pathname,
            search: queryString.stringify(newFilters),
        });
    };
    return (
        <>
            <Box>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item sx={{ width: "250px" }}>
                            <Paper elevation={0}>
                                <ProductFilters
                                    filters={queryParams}
                                    onChange={handleFiltersChange}
                                />
                            </Paper>
                        </Grid>
                        <Grid item sx={{ flex: "1 1 0" }}>
                            <Paper elevation={0}>
                                <ProductSort
                                    currentSort={queryParams._sort as string}
                                    onChange={handleSortChange}
                                />
                                <FilterViewer filters={queryParams} onChange={setNewFilters} />
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
