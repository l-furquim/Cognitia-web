import Image from "next/image"
import Link from "next/link"
import { SimpleLink } from "../simple-link"
import { SearchBar } from "./search-bar"
import { HeartIcon, ShoppingCart } from "lucide-react"
import { IconContainer } from "./icon-container"

export const LoggedNavBar = ({ name, country, iconUrl, ocupation, email }: {
  name: string, country: string, iconUrl: string, ocupation: string, email: string
}) => {
  return (
    <div className="w-full items-center text-lg flex p-3 text-zinc-200">
      <div className="space-x-10 flex items-center">
        <Link href={"/"} className="hover:cursor-pointer">
          <Image alt="Cognitia logo" width={200} height={200} src={"/logo.png"} />
        </Link>
        
        <SimpleLink href="/explore" content="Explorar" />

        <SearchBar/>
        
        <SimpleLink href="/learning" content="Meu estudo"/>

        <Link href={"/favorites"}>
          <HeartIcon size={20} />
        </Link>

        <Link href={"/cart"}>
          <ShoppingCart size={20} />
        </Link>

        <IconContainer iconUrl={iconUrl} country={country} email={email} name={name} ocupation={ocupation} />
      </div>
    </div>
  )
}