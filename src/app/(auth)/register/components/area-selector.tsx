import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const AreaSelector = () => {
  return (
    <ToggleGroup className="w-75 space-x-10" type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        Desenvolvimento de software
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        Gestão de projetos
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        Backend
      </ToggleGroupItem>
    </ToggleGroup>
  )
}