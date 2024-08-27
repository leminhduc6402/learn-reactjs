import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../userSlide";
import { useSnackbar } from "notistack";
type RegisterPropsType = {
    onCloseDialog: () => void;
};

const Register = (props: RegisterPropsType) => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const handleSubmit = async (values: any) => {
        try {
            values.username = values.email;
            console.log(">> Register Submit: ", values);
            const action: any = register({ values });
            const result: any = await dispatch(action);
            const user = unwrapResult(result);
            console.log(user);

            const { onCloseDialog } = props;
            if (onCloseDialog) {
                onCloseDialog();
            }
            enqueueSnackbar("Registration Successfully 🎉", { variant: "success" });
        } catch (error) {
            enqueueSnackbar("Registration failed", { variant: "error" });
            console.log("Failed to register: ", error);
        }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Register;
