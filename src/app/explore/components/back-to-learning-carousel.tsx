import type { UserHistoryCourse } from "@/@types/course-types"
import Image from "next/image"
import type React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { LearningContainer } from "./learning-container"

interface BackToLearningContainerProps {
  courses: UserHistoryCourse[]
}

export const BackToLearningContainer: React.FC<BackToLearningContainerProps> = ({ courses }) => {

  
  return (
    <Carousel
    className="w-full max-w-full p-0"
    >
       <CarouselContent className=" flex items-center p-0 w-fit">
       {courses.map((course) => (
          <CarouselItem key={course.videoId} className="md:basis-1/2 w-fit lg:basis-1/3 flex items-start pl-5">
            <div className="p-1 w-fit h-fit">
              <LearningContainer lastVideoThumbUrl={course.lastVideoThumbUrl} title={course.title} videoDuration={course.videoDuration} videoId={course.videoId} videoName={course.videoName} />
            </div>
          </CarouselItem>
      ))}
       </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}