import { Box } from "@mui/material";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

type ProductFiltersProps = {
    filters: any;
    onChange: (newFilter: any) => any;
};
function ProductFilters({ filters, onChange }: ProductFiltersProps) {
    const handleCategoryChange = (newCategoryId: number) => {
        if (!onChange) return;
        const newFilters = {
            "category.id": newCategoryId,
        };

        onChange(newFilters);
    };
    const handleChange = (values: any) => {
        if (onChange) onChange(values);
    };

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilters;
