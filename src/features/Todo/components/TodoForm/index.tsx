import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";
import InputField from "src/components/Form-Controls/InputField";
import * as yup from "yup";
// import InputField from "../../../../components/Form-Controls/InputField";

const schema = yup.object({
    title: yup.string().required("Please enter title"),
});

type FormSubmitType = {
    title: string;
};
type TodoFormProps = {
    onSubmit: (event: FormSubmitType) => void;
};
function TodoForm(props: TodoFormProps) {
    const form: UseFormReturn<{ title: string }> = useForm({
        defaultValues: { title: "" },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values: FormSubmitType) => {
        console.log(">>> TODO FORM: ", values);
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;
