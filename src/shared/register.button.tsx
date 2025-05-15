"use client"

import { Button } from "@/lib/components/ui/button"

export const RegisterButton = () => {
  return (
    <Button
    onClick={() => location.replace("/register")}
    className="text-zinc-200 w-25 bg-zinc-800 border-[1px] border-zinc-200 rounded-md  "
    size={"lg"}
    variant={"secondary"}>
          Registrar
    </Button>
  )
} 