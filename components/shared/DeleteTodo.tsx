"use client"

import { deleteTodo } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({ todo }: {todo: todoType}) => {
    return (
        <Form
            action={deleteTodo}
        >
            <Input
                name="inputId"
                type="hidden"
                value={todo.id}
            />

            <Button
                actionButton
                text={<BsFillTrashFill />}
                type="submit"
            />

        </Form>
    );
}

export default DeleteTodo;