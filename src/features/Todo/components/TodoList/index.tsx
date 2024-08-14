import classNames from "classnames";
import "./style.scss";

export type Todo = {
    id: number;
    title: string;
    status: string;
};
type TodoListProps = {
    todoList: Todo[];
    onTodoClick: (todo: Todo, index: number) => void;
};

function TodoList(props: TodoListProps) {
    const { todoList, onTodoClick } = props;
    const handleTodoClick = (todo: Todo, index: number) => {
        if (!onTodoClick) return;

        onTodoClick(todo, index);
    };

    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li
                    key={index}
                    className={classNames({
                        "todo-item": true,
                        completed: todo.status === "completed",
                    })}
                    onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                        event.preventDefault();
                        handleTodoClick(todo, index);
                    }}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
