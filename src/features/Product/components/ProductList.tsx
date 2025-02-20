import { Box, Grid } from "@mui/material";
import Product from "./Product";

type ProductListProps = {
    data: any[];
};

function ProductList({ data = [] }: ProductListProps) {
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        {/* <Box padding={1}> */}
                        <Product product={product} />
                        {/* </Box> */}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
