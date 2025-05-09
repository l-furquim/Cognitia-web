import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { SimpleLink } from "../simple-link"


export const IconContainer = ({ name, country,  iconUrl , ocupation, email  }: {
  name: string, country: string,  iconUrl: string , ocupation: string, email: string 
}) => {
  return (
    <HoverCard>
    <HoverCardTrigger asChild>
      <Avatar className="w-10 h-10 hover:cursor-pointer">
        <AvatarImage src={iconUrl} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </HoverCardTrigger>
    <HoverCardContent className="w-64">
      <div className="flex w-full flex-col space-y-4">
        <div className="flex w-full justify-start items-center space-x-5">
            <Avatar className="w-10 h-10">
              <AvatarImage src={iconUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col w-full items-start justify-center space-y-3">
              <h1 className="text-zinc-800 font-bold">
                {name}
              </h1>
              <p className="text-muted-foreground  text-xs">{ocupation}</p>
            </div>
        </div>
        <hr className="w-full text-zinc-400" />
        <div className="w-full h-full flex flex-col space-y-2">
          <SimpleLink href="/learning" content="Meu estudo" adicionalClassname="text-sm"/>
          <SimpleLink href="/cart" content="Meu carrinho" adicionalClassname="text-sm"/>
          <SimpleLink href="/teach" content="Ensinar" adicionalClassname="text-sm"/>
          <hr className="w-full text-zinc-400" />
          <SimpleLink href="/settings" content="Configurações" adicionalClassname="text-sm"/>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
  )
}