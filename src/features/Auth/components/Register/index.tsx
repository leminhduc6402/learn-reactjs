import RegisterForm from "../RegisterForm";

const Register = () => {
    const handleSubmit = (values: any) => {
        console.log(">> Register Submit: ", values);
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Register;
