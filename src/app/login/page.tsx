import { Input } from "@/components/ui/input";
import { Button } from "@/lib/components/ui/button";
import NeutralNavBar from "@/shared/neutral-nav-bar";
import { Github, MailPlus, Twitter } from "lucide-react";
import Link from "next/link";
import LoginForm from "./components/login-form";

export default function LoginPage(){
  return (
    <div className="p-4 h-full w-full flex items-center flex-col bg-zinc-800">
       <NeutralNavBar/>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[35vw] h-[70vh] bg-zinc-200 space-y-5 rounded-xl p-6 flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl">
              Bem vindo de volta
            </h1>
            <div className="text-muted-foreground flex space-x-1">
              <p>Não possui uma conta ainda?</p>
              <Link className="text-zinc-800 font-bold" href={"/register"}>
                Criar
              </Link>
            </div>
            <LoginForm/>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-s w-31 border-muted-foreground"/>
              <span className="mx-4 text-gray-500 text-sm">ou</span>
              <hr className="flex-grow border-s w-31 border-muted-foreground" />
            </div>
            <div className="flex w-71 justify-center items-center space-x-3">
              <Button className="w-20">
                <Github/>
              </Button>
              <Button className="w-20">
                Google
              </Button>
              <Button className="w-20">
                <Twitter/>
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
}