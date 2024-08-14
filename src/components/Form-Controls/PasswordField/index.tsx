import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";

type TextFieldProps = {
    form: {
        control: Control<any>;
        formState: {
            errors: Record<string, any>;
            touchedFields: Record<string, boolean>;
        };
    };
    name: string;
    label: string;
    disabled?: boolean;
};

function PasswordField(props: TextFieldProps) {
    const { form, name, label, disabled } = props;
    const { errors, touchedFields } = form.formState;

    const hasError = touchedFields?.[name] && errors?.[name];

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            {/* <Controller
                name={name}
                control={form.control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        error={!!hasError}
                        margin="normal"
                        helperText={errors?.[name]?.message}
                        label={label}
                        disabled={disabled}
                        fullWidth
                    />
                )}
            /> */}
            <FormControl
                margin="normal"
                error={!!hasError}
                fullWidth
                variant="outlined"
                disabled={disabled}
            >
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                <Controller
                    name={name}
                    control={form.control}
                    render={({ field }) => (
                        <OutlinedInput
                            {...field}
                            id={name}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={label}
                        />
                    )}
                />
            </FormControl>
        </div>
    );
}

export default PasswordField;
