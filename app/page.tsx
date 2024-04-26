import AddTodo from "@/components/shared/AddTodo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center bg-red-100">
      <span className="text-3xl font-extrabold uppercase">
        To-do-app
      </span>
      <h1 className=" text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-700 ml-2">
          Server Actions
        </span>
      </h1>

      <div className="flex justify-center items-center w-[1000px] bg-blue-100">
        <AddTodo />
      </div>
    </div>
  );
}
