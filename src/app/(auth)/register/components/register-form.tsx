import { Input } from "@/components/ui/input";
import { Button } from "@/lib/components/ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

export default function RegisterForm(){
  return (
    <form action="" className="space-y-6 pt-10">
          
          <div className="space-y-3">
            <Label htmlFor="inputName">
              Como devemos te chamar?
            </Label>
            
            <Input
            className="bg-zinc-100 w-75"
            id="inputName"
            placeholder="Lucas Hernandes"/>
          </div>

          <div className="space-y-3">
            <Label htmlFor="inputEmail">
              Qual seu email de preferência?
            </Label>
            
            <Input
            className="bg-zinc-100 w-75"
            id="inputEmail"
            placeholder="furquimmsw@gmail.cm"/>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="inputPassword">
              Qual seu email de preferência?
            </Label>
            
            <Input
            type="password"
            className="bg-zinc-100 w-75"
            id="inputPassword"
            placeholder="*****"/>
          </div>
          
          <Button className="w-75">
            Próximo
          </Button>

          <div className="text-muted-foreground flex space-x-1">
            <p>Já possui uma conta?</p>
            <Link className="text-zinc-800 font-bold" href={"/login"}>
              Entrar
            </Link>
          </div>
        </form>
  )
}