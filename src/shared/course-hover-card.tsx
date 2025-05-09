import { CalendarIcon, HeartIcon, PlusCircleIcon } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const CourseHoverCard = ({
  children,
  description,
  title,
  totalHours,
  lastUpdate

}: { children: React.ReactNode, description: string, title: string, totalHours: number, lastUpdate: string }) => {
  return (
    <HoverCard>
    <HoverCardTrigger asChild>
      {children}
    </HoverCardTrigger>
    <HoverCardContent side="left" className="w-80 h-100">
      <h1 className="text-xl font-bold ">
        {title}
      </h1>
      <div className="flex flex-col pt-2 text-xs text-muted-foreground space-y-3 justify-center">
        <p>
          Atualizado em <span className="text-emerald-600 font-bold">{lastUpdate}</span>
        </p>
        <p>
          {totalHours} horas totais
        </p>
      </div>
      <p className="pt-5 text-sm ">
        {description}
      </p>
      <div className="absolute bottom-4 space-x-3 flex items-center">
        <Button className="hover:cursor-pointer">
          Adicionar ao carrinho
          <PlusCircleIcon/>
        </Button>
        <Button variant={"outline"} className="hover:cursor-pointer">
          <HeartIcon/>
        </Button>
      </div>
    </HoverCardContent>
  </HoverCard>
  )
}