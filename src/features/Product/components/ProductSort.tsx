import { Tab, Tabs } from "@mui/material";

type ProductSortProps = {
    currentSord: string;
    onChange: (newvalue: string) => any;
};
function ProductSort({ currentSord, onChange }: ProductSortProps) {
    const handleSortChange = (e: any, newvalue: string) => {
        console.log("Product Sort: ", e);
        if (onChange) {
            onChange(newvalue);
        }
    };
    return (
        <>
            <Tabs
                value={currentSord}
                onChange={handleSortChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
                <Tab label="Giá cao xuống thấp" value="salePrice:DESC"></Tab>
            </Tabs>
        </>
    );
}

export default ProductSort;
