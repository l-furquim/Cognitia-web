import type { Course } from "@/@types/course-types"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export const CourseContainer: React.FC<Course> = (course) => {
  return(
    <Link href={"/overview/" + course.id}>
      <div className="w-64 space-y-3 h-90 flex flex-col justify-start items-center">
      
        <Image
        className="rounded-xl"
        alt="Course thumb"
        width={300}
        height={300}
        src="https://marketplace.canva.com/EAFNgl2fFFo/1/0/1600w/canva-miniatura-youtube-v%C3%ADdeo-curioso-gr%C3%A1tis-4BU-L3rT9uA.jpg"
        />
      
        <h1 className="font-bold text-xl  text-zinc-200 w-full">
          {course.title}
        </h1>
        <p className="text-muted-foreground text-sm w-full flex justify-start">
          {course.people}
        </p>
        <p className="text-orange-300 w-full flex justify-start font-bold">
          {course.totalRate}
        </p>
        <p className="font-bold  text-zinc-200 w-full flex justify-start">
          R$ {course.price.toString().replace(".", ",")}
        </p>
      </div>
    </Link>
  )
}