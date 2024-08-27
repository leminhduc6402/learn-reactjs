import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { login } from "../../userSlide";
import LoginForm from "../LoginForm";
type LoginPropsType = {
    onCloseDialog: () => void;
};

const Login = (props: LoginPropsType) => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const handleSubmit = async (values: any) => {
        try {
            console.log(">> Login Submit: ", values);
            const action: any = login({ values });
            const result: any = await dispatch(action);
            const user = unwrapResult(result);
            console.log(user);

            const { onCloseDialog } = props;
            if (onCloseDialog) {
                onCloseDialog();
            }
            enqueueSnackbar("Login Successfully 🎉", { variant: "success" });
        } catch (error) {
            enqueueSnackbar("Login failed", { variant: "error" });
            console.log("Failed to Login: ", error);
        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Login;
