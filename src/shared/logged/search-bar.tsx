import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export const SearchBar = () => {
  return (
    <div className="border-[1px] border-gray-400 rounded-xl p-4 py10 w-120 h-12 flex space-x-5 justify-start items-center">
      <SearchIcon size={20} />
      <Input className="border-none" placeholder="Procure suas próximas conquistas" />
    </div>
  )
}