import Image from "next/image";
import { SimpleLink } from "./simple-link";
import Link from "next/link";
import { LoginButton } from "./login-button";
import { RegisterButton } from "./register.button";

export default function NeutralNavBar(){
  return (
    <div className="w-full items-center text-lg flex p-3 text-zinc-200">
      <div className="space-x-10 flex items-center">
        <Link href={"/"} className="hover:cursor-pointer">
          <Image alt="Cognitia logo" width={800} height={800} src={"/logo.png"} />
        </Link>
        
        <SimpleLink href="/explore" content="Explorar" />

        <SimpleLink content="Publicar" href="/publish" />
        
        <SimpleLink content="Preços" href={"/pricing"}/>

        <SimpleLink content="Comunidade" href={"/community"}/>
        
      </div>
      <div className="space-x-8 w-full flex justify-end">
        <LoginButton/>
        <RegisterButton/>
      </div>
    </div>
  )
}