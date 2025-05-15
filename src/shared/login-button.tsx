"use client"

import { Button } from "@/lib/components/ui/button"

export const LoginButton = () => {
  return (
    <Button
    onClick={() => location.replace("/register")}
    size={"lg"}
    variant={"outline"}
    className="bg-rose-400 w-25 border-none hover:bg-rose-600  hover:opacity-70">
          Entrar
    </Button>
  )
}
