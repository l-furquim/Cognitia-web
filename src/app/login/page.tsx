import NeutralNavBar from "@/shared/neutral-nav-bar";
import Link from "next/link";

export default function LoginPage(){
  return (
    <div className="p-4 h-full w-full flex items-center flex-col bg-zinc-800">
       <NeutralNavBar/>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[35vw] h-[70vh] bg-zinc-200 space-y-5 rounded-xl p-6 flex flex-col items-center">
            <h1 className="font-bold text-xl">
              Bem vindo de volta
            </h1>
            <div className="text-muted-foreground flex space-x-1">
              <p>Não possui uma conta ainda?</p>
              <Link className="text-zinc-800 font-bold" href={"/register"}>
                Criar
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}