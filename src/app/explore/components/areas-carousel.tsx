import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AreaContainer } from "./area-container"

interface AreaContainerProps {
  name: string,
  icon: string,
  learners: number
}

interface AreasCarouselProps {
  areas: AreaContainerProps[]
}

export const AreasCarousel:React.FC<AreasCarouselProps>  = ({areas}) => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-ful"
      >
      <CarouselContent>
        {areas.map((area) => (
           <CarouselItem key={area.name} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 w-fit h-fit">
              <AreaContainer icon={area.icon} name={area.name} learners={area.learners}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}