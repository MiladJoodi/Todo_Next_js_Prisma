import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Form from "../ui/Form";
import { changeStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";

const ChangeTodo = ({ todo }:{todo: todoType}) => {
    return (
        <Form action={changeStatus}>
            <Input name="inputId" value={todo.id} type="hidden" />

            <Button
                actionButton
                type="submit"
                text={<AiOutlineCheckCircle />}
            />

        </Form>
    );
}

export default ChangeTodo;