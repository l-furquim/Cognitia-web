"use client"

import { Button } from "@/lib/components/ui/button"

export const LoginButton = () => {
  return (
    <Button onClick={() => location.replace("/login")} size={"lg"} variant={"outline"} className="bg-zinc-800  hover:opacity-70">
          Logar
    </Button>
  )
}
