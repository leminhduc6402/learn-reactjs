import queryString from "query-string";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoList, { Todo } from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
type FormSubmitType = {
    title: string;
};
function ListPage() {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "new",
        },
        {
            id: 2,
            title: "Code",
            status: "completed",
        },
        {
            id: 3,
            title: "Sleep",
            status: "new",
        },
    ];
    const location = useLocation();
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || "all";
    });
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || "all");
    }, [location.search]);
    const handleTodoClick = (todo: Todo, index: number) => {
        console.log(todo);
        const newTodoList = [...todoList];

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new",
        };

        setTodoList(newTodoList);
    };
    const handleShowAllClick = () => {
        const queryParams = { status: "all" };
        navigate({ search: queryString.stringify(queryParams) });
    };
    const handleShowCompletedClick = () => {
        const queryParams = { status: "completed" };
        navigate({ search: queryString.stringify(queryParams) });
    };
    const handleShowNewClick = () => {
        const queryParams = { status: "new" };
        navigate({ search: queryString.stringify(queryParams) });
    };
    const renderedTodoList = useMemo(() => {
        return todoList.filter((todo) => filterStatus === "all" || filterStatus === todo.status);
    }, [todoList, filterStatus]);
    const handleTodoFormSubmit = (values: FormSubmitType) => {
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: "new",
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };
    return (
        <>
            <h3>What do you want to do?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </>
    );
}

export default ListPage;
