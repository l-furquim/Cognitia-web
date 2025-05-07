"use client"

import { Button } from "@/lib/components/ui/button";
import NeutralNavBar from "@/shared/neutral-nav-bar";

export default function Home() {
  return (
    <div className="p-4 h-full w-full flex flex-col bg-zinc-800">
      <NeutralNavBar/>
      <div className="w-full flex flex-col space-y-6 items-start p-4 pt-20">
        <h1 className="text-zinc-200 text-4xl font-bold">
          Pequenos cursos, grandes conquistas
        </h1>
        <p className="text-muted-foreground text-2xl">
          Aqui você tem liberdade para aprender <br/>
          <span className="text-zinc-200">o que</span> quiser <br/>
          <span className="text-zinc-200">onde</span>  quiser
        </p>
        <div className="space-x-6 pt-6">
          <Button className="w-40 p-3" variant={"outline"}>
            Começar
          </Button>
          <Button className="text-zinc-200 p-3" variant={"ghost"}>
            Mais plataformas
          </Button>
        </div>
      </div>
    </div>
  );
}
