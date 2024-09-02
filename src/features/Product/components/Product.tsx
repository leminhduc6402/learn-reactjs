import { Box, Tooltip, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAIL } from "src/constants";

type ProductProps = {
    product: any;
};
function Product({ product }: ProductProps) {
    const thumbnail = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL;
    return (
        <Box padding={1}>
            <Box padding={1} minHeight={200}>
                <img
                    src={thumbnail}
                    alt={product.name}
                    style={{ height: "200px", objectFit: "contain" }}
                    width="100%"
                />
            </Box>
            <Tooltip title={product.name} placement="top-start">
                <Typography
                    variant="body2"
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    {product.name}
                </Typography>
            </Tooltip>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
                        product.salePrice,
                    )}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ``}
            </Typography>
            {/* <Typography variant="body2">{product.name}</Typography> */}
        </Box>
    );
}

export default Product;
