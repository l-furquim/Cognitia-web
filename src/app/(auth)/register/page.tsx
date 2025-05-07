import { Button } from "@/lib/components/ui/button";
import RegisterForm from "./components/register-form";
import { Github, Twitter } from "lucide-react";

export default function RegisterPage(){
  return (
    <div className="w-full h-[101vh] flex justify-center">
      <div className="w-[50%] h-full p-5 bg-zinc-900 rounded-l-xl flex-col">
        <h1 className="text-zinc-200 text-3xl font-bold">
          Bem vindo
        </h1>
      </div>
      <div className="w-[50%] h-full space-y-5 bg-zinc-200 rounded-r-xl flex flex-col justify-center items-center">
        <RegisterForm/>
      </div>
    </div>
  )
}