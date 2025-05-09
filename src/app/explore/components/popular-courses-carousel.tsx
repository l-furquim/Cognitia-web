import type { Course } from "@/@types/course-types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CourseContainer } from "@/shared/course-container"
import { CourseHoverCard } from "@/shared/course-hover-card"
import type React from "react"

interface PopularCoursesCarouselProps {
  courses: Course[]
}

export const PopularCoursesCarousel: React.FC<PopularCoursesCarouselProps> = ({ courses }) => {
  return (
    <Carousel
      className="w-full max-w-full"
    >
      <CarouselContent className=" flex items-center">
        {courses.map((course) => (
          <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3 flex items-start">
            <div className="p-1 w-fit h-fit">
              <CourseHoverCard description={course.description} lastUpdate={course.lastUpdate} title={course.title} totalHours={course.totalHours}>
                <CourseContainer
                title={course.title}
                createdAt={course.createdAt}
                description={course.description}
                language={course.language}
                featuredReview={course.featuredReview}
                id={course.id}
                lastUpdate={course.lastUpdate}
                people={course.people}
                price={course.price}
                requirements={course.requirements}
                skill={course.skill}
                thumbUrl={course.thumbUrl}
                topics={course.topics}
                totalHours={course.totalHours}
                totalRate={course.totalRate}
                totalStudents={course.totalStudents}
                />
              </CourseHoverCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}