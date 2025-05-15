import { Github, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {

  console.log("Footer");

  return (
    <div className="w-full bg-zinc-800 flex-col justify-center h-90 p-8 space-y-8">
      <div className="w-full flex items-center  justify-between">
        <div className="flex flex-col">
          <Image
          width={200}
          height={200}
          src={"/Logo.svg"}
          alt="Cogtnia logos" />
          <p className="text-zinc-200">
            evolua todas suas <br />
            skills em um só lugar
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-rose-400 pb-1">
            Produto
          </h3>
          <Link className="text-zinc-200" href={""}>
            Features
          </Link>
          <Link className="text-zinc-200" href={"/realeses"}>
            Realese notes
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-rose-400 pb-1">
            Empresa
          </h3>
          <Link className="text-zinc-200" href={"/about"}>
            Sobre nós
          </Link>
          <Link className="text-zinc-200" href={"/contact"}>
            Contato
          </Link>
        </div>
        <div className="flex flex-col space-y-2 h-full justify-start">
          <h3 className="text-rose-400 pb-1">
            Learn
          </h3>
          <Link className="text-zinc-200" href={"/comunity"}>
            Comunidade
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-start items-center space-x-4">
        <Link href={"https://github.com/l-furquim/Cognitia-web"}>
          <Github className="text-zinc-200"/>
        </Link>
        <Link href={"#"}>
          <Twitter className="text-zinc-200"/>
        </Link>
      </div>
      <hr></hr>
      <div className="w-full flex justify-between items-center text-zinc-200">
        <p>
          <span>
            2025 Logo
          </span>
          <span>
            Todos os direitos reservados
          </span>
        </p>
        <p>
          Termos de política
        </p>
      </div>
    </div>
  )
}