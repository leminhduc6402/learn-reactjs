import { Box, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAIL } from "src/constants";

type ProductProps = {
    product: any;
};
function Product({ product }: ProductProps) {
    const thumbnail = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL;
    return (
        <Box padding={1}>
            <Box padding={1}>
                <img src={thumbnail} alt={product.name} width="100%" />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                {product.salePrice} - {product.promotionPercent}%
            </Typography>
            {/* <Typography variant="body2">{product.name}</Typography> */}
        </Box>
    );
}

export default Product;
