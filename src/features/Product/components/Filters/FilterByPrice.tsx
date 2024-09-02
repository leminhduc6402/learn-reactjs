import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

type FilterByPriceProps = {
    onChange: (category: any) => any;
};

function FilterByPrice({ onChange }: FilterByPriceProps) {
    const [values, setValues] = useState({ salePrice_gte: 0, salePrice_lte: 0 });
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((pre) => ({
            ...pre,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        if (onChange) {
            onChange(values);
        }
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        });
    };
    return (
        <>
            <Box sx={{ padding: "20px", borderTop: "1px solid gray" }}>
                <Typography variant="subtitle2">GIÁ</Typography>
                <Box
                    sx={{
                        margin: "10px 0",
                        display: "flex",
                        flexFlow: "row nowrap",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        name="salePrice_gte"
                        value={values.salePrice_gte}
                        onChange={handleChange}
                    />
                    <span style={{margin: "0 5px"}}> ~ </span>
                    <TextField
                        name="salePrice_lte"
                        value={values.salePrice_lte}
                        onChange={handleChange}
                    />
                </Box>
                <Button variant="outlined" color="primary" onClick={handleSubmit}>
                    Áp dụng
                </Button>
            </Box>
        </>
    );
}

export default FilterByPrice;
