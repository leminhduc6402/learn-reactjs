import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

type FilterByServiceProps = {
    filters: any;
    onChange: (category: any) => any;
};

function FilterByService({ filters = {}, onChange }: FilterByServiceProps) {
    // const [values, setValues] = useState({
    //     isPromotion: Boolean(filters.isPromotion),
    //     isFreeShip: Boolean(filters.isFreeShip),
    // });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        // setValues((pre) => ({
        //     ...pre,
        //     [name]: checked,
        // }));
        onChange({ [name]: checked });
    };
    return (
        <>
            <Box sx={{ padding: "20px", borderTop: "1px solid gray" }}>
                <Typography variant="subtitle2">DỊCH VỤ</Typography>
                <ul style={{ padding: 0, margin: 0 }}>
                    {[
                        { value: "isPromotion", label: "Khuyến mãi" },
                        { value: "isFreeShip", label: "Miễn phí vận chuyển" },
                    ].map((service) => (
                        <li key={service.value} style={{ margin: "10px 0 0 0" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={Boolean(filters[service.value])}
                                        name={service.value}
                                        color="primary"
                                        onChange={handleChange}
                                    />
                                }
                                label={service.label}
                            />
                        </li>
                    ))}
                </ul>
            </Box>
        </>
    );
}

export default FilterByService;
