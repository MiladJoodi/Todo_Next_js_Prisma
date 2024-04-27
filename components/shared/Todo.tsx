import { todoType } from "@/types/todoType";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: any) => {
    const todoStyle = {
        textDecoration:
            todo.isCompleted === true ? "line-through" : "none",
        opacity: todo.isCompleted === true ? 0.5 : 1,
    };

    return (
        <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl" style={todoStyle}>
            <ChangeTodo todo={todo} />
            <span className="text-center font-bold uppercase">
                {todo.title}
            </span>
            <div className="flex items-center gap-5">
                <EditTodo todo={todo} />
                <DeleteTodo todo={todo} />
            </div>
        </div>
    );
}

export default Todo;