import { Box, Chip } from "@mui/material";
import { useMemo } from "react";

type FilterViewerType = {
    filters: Record<string, any>;
    onChange: (filters: any) => any;
};
const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => "Giao hàng miễn phí",
        isActive: (filters: any) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},
        onToggole: (filters: any) => {
            const newFilters = { ...filters };
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip;
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => "Có khuyến mãi",
        isActive: () => true,
        isVisible: (filters: any) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters: any) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggole: () => null,
    },
    {
        id: 3,
        getLabel: (filters: any) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters: any) =>
            Object.keys(filters).includes("salePrice_gte") &&
            Object.keys(filters).includes("salePrice_lte"),
        isRemovable: true,
        onRemove: (filters: any) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_gte;
            delete newFilters.salePrice_lte;
            return newFilters;
        },
        onToggole: () => null,
    },
];
function FilterViewer({ filters = {}, onChange }: FilterViewerType) {
    const visibleFilter = useMemo(() => {
        return FILTER_LIST.filter((x) => x.isVisible(filters));
    }, [filters]);
    return (
        <Box
            component="ul"
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                margin: "10px 10px",
                padding: 0,
            }}
        >
            {visibleFilter.map((x) => (
                <li key={x.id}>
                    <Chip
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? "primary" : "default"}
                        clickable={!x.isRemovable} // true nếu không thể xóa, điều này sẽ làm chip có thể nhấn
                        onClick={
                            !x.isRemovable
                                ? () => {
                                      if (!onChange) {
                                          return;
                                      }
                                      const newFilter = x.onToggole(filters);
                                      onChange(newFilter);
                                  }
                                : undefined
                        } // Hành động khi chip không thể xóa
                        onDelete={
                            x.isRemovable
                                ? () => {
                                      if (!onChange) {
                                          return;
                                      }
                                      const newFilter = x.onRemove(filters);
                                      onChange(newFilter);
                                  }
                                : undefined
                        } // Hành động khi chip có thể xóa
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;
