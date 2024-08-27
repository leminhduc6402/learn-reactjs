import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

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

function InputField(props: TextFieldProps) {
    const { form, name, label, disabled } = props;
    const { errors } = form.formState;

    const hasError = errors?.[name];

    return (
        <Controller
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
        />
    );
}

export default InputField;
