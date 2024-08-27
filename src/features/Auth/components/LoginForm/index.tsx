import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import { useForm, UseFormReturn } from "react-hook-form";
import InputField from "src/components/Form-Controls/InputField";
import PasswordField from "src/components/Form-Controls/PasswordField";
import * as yup from "yup";

const schema = yup.object().shape({
    identifier: yup
        .string()
        .required("Please enter a valid email address")
        .email("Invalid email address"),
    password: yup.string().required("Please enter your password"),
});

type FormSubmitType = {
    identifier: string;
    password: string;
};
type LoginFormProps = {
    onSubmit: (event: FormSubmitType) => void;
};
function LoginForm(props: LoginFormProps) {
    const form: UseFormReturn<FormSubmitType> = useForm({
        defaultValues: { identifier: "", password: "" },
        resolver: yupResolver(schema),
    });

    const { isSubmitting } = form.formState;

    const handleSubmit = async (values: FormSubmitType) => {
        console.log(">>> REGISTER FORM: ", values);
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
        form.reset();
    };

    return (
        <div style={{ paddingTop: 10, position: "relative" }}>
            {isSubmitting && (
                <LinearProgress style={{ position: "absolute", top: -20, width: "100%" }} />
            )}

            <Avatar sx={{ margin: "0 auto", background: "red", color: "white" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h5" sx={{ textAlign: "center" }}>
                Sign in
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ margin: "15px 0 10px 0" }}
                >
                    SIGN IN
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
