"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/utils/prisma"
import { NextResponse } from "next/server";

// create
export async function create(formData: FormData) {
    const input = formData.get("input") as string;

    if(!input.trim()){
        return;
    }

    await prisma.todo.create({
        data: {
            title: input,
        }
    })
    revalidatePath("/")
}

// change status
export async function changeStatus(formData: FormData){
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        },
    });

    if(!todo){
        return;
    }

    const updatedStatus = !todo?.isCompleted;
    
    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data:{
            isCompleted: updatedStatus
        }
    })
    revalidatePath("/")
    return updatedStatus;
}

// Edit
export async function edit(formData: FormData){
    const input = formData.get("newTitle") as string
    const inputId = formData.get("inputId") as string
    
    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            title: input,
        },
    });
    revalidatePath("/");
}

// Delete
export async function deleteTodo(formData: FormData){
    const inputId = formData.get("inputId") as string;

    await prisma.todo.delete({
        where: {
            id: inputId
        }
    })
    revalidatePath("/")
}