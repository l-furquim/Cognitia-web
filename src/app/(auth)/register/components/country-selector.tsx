import React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/lib/components/ui/button"
 


export const CountrySelector = () => {
  
  const countries = [
    {
      value: "united states",
      label: "🇺🇸 United States",
    },
    {
      value: "brazil",
      label: "🇧🇷 Brazil",
    },
    {
      value: "united kingdom",
      label: "🇬🇧 United Kingdom",
    },
    {
      value: "france",
      label: "🇫🇷 France",
    },
    {
      value: "germany",
      label: "🇩🇪 Germany",
    },
    {
      value: "japan",
      label: "🇯🇵 Japan",
    },
    {
      value: "china",
      label: "🇨🇳 China",
    },
    {
      value: "india",
      label: "🇮🇳 India",
    },
    {
      value: "russia",
      label: "🇷🇺 Russia",
    },
    {
      value: "canada",
      label: "🇨🇦 Canada",
    },
    {
      value: "australia",
      label: "🇦🇺 Australia",
    },
    {
      value: "italy",
      label: "🇮🇹 Italy",
    },
    {
      value: "spain",
      label: "🇪🇸 Spain",
    },
    {
      value: "mexico",
      label: "🇲🇽 Mexico",
    },
    {
      value: "south korea",
      label: "🇰🇷 South Korea",
    },
  ];
  
const [open, setOpen] = React.useState(false)
const [value, setValue] = React.useState("")

return (
  <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        id="countrySelector" 
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-75 justify-between"
      >
        {value
          ? countries.find((country) => country.value === value)?.label
          : "Selecione um país..."}
        <ChevronsUpDown className="opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search country..." className="h-9" />
        <CommandList>
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {countries.map((country) => (
              <CommandItem
                key={country.value}
                value={country.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {country.label}
                <Check
                  className={cn(
                    "ml-auto",
                    value === country.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
)
}