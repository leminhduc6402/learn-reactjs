import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, Typography } from "@mui/material";
import { useForm, UseFormReturn } from "react-hook-form";
import InputField from "src/components/Form-Controls/InputField";
import PasswordField from "src/components/Form-Controls/PasswordField";
import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    retypePassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required(),
});

type FormSubmitType = {
    fullName: string;
    email: string;
    password: string;
    retypePassword: string;
};
type RegisterFormProps = {
    onSubmit: (event: FormSubmitType) => void;
};
function RegisterForm(props: RegisterFormProps) {
    const form: UseFormReturn<FormSubmitType> = useForm({
        defaultValues: { fullName: "", email: "", password: "", retypePassword: "" },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values: FormSubmitType) => {
        console.log(">>> REGISTER FORM: ", values);
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };
    return (
        <div style={{ paddingTop: 10 }}>
            <Avatar sx={{ margin: "0 auto", background: "red", color: "white" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h5" sx={{ textAlign: "center" }}>
                Create An Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ margin: "15px 0 10px 0" }}
                >
                    CREATE AN ACCOUNT
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
