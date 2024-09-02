import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import categoryApi from "src/api/categoryApi";
import "./style.scss";
type FilterByCategoryProps = {
    onChange: (category: any) => any;
};
function FilterByCategory({ onChange }: FilterByCategoryProps) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res: any = await categoryApi.getAll("");
                setCategoryList(
                    res.map((item: any) => ({
                        id: item.id,
                        name: item.name,
                    })),
                );
            } catch (error) {
                console.log("Failed to fetch category");
            }
        })();
    }, []);
    const handleCategoryClick = (category: any) => {
        if (onChange) {
            onChange(category.id);
        }
    };
    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
            <ul className="menu">
                {categoryList.map((category: any, index) => (
                    <li key={category.id || index} onClick={() => handleCategoryClick(category)}>
                        <Typography variant="body2">
                            {category.name || `Danh muc ${index}`}
                        </Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;
