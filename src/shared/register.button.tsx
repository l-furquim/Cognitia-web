"use client"

import { Button } from "@/lib/components/ui/button"

export const RegisterButton = () => {
  return (
    <Button onClick={() => location.replace("/register")} className="hover:bg-zinc-300" size={"lg"} variant={"secondary"}>
          Registrar
    </Button>
  )
} 