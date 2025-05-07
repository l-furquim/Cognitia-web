import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from "react";

export const AreaSelector = () => {
  const [areas, setAreas] = useState([]);

  return (
    <ToggleGroup onValueChange={(value) => setAreas(areas)} className="w-80 flex flex-col justify-center space-x-12" type="multiple">
     <div className="flex">
      <ToggleGroupItem className=" px-8 w-full" value="bold" aria-label="Toggle bold">
          Desenvolvimento de software
        </ToggleGroupItem>
        <ToggleGroupItem className=" w-full" value="italic" aria-label="Toggle italic">
          Gestão de projetos
        </ToggleGroupItem>
     </div>
      <div className="flex">
        <ToggleGroupItem className=" w-full" value="backend" aria-label="Toggle strikethrough">
          Backend
        </ToggleGroupItem>
        <ToggleGroupItem className=" w-full" value="frontend" aria-label="Toggle strikethrough">
          Frontend
        </ToggleGroupItem>
      </div>
      <div className="flex">
        <ToggleGroupItem className=" w-full" value="devops" aria-label="Toggle strikethrough">
          Devops
        </ToggleGroupItem>
        <ToggleGroupItem className=" w-full" value="ingles" aria-label="Toggle strikethrough">
          Inglês
        </ToggleGroupItem>
      </div>
      <div className="flex">
        <ToggleGroupItem className="px-8 w-full" value="machineLearning" aria-label="Toggle strikethrough">
          Machine Learning
        </ToggleGroupItem>
        <ToggleGroupItem className=" w-full" value="java" aria-label="Toggle strikethrough">
          Java
        </ToggleGroupItem>
      </div>
    </ToggleGroup>
  )
}