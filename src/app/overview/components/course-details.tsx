'use client'

import type { Course } from "@/@types/course-types"
import { Button } from "@/components/ui/button"
import type React from "react"
import { useState } from "react"
import { CourseReviews } from "./course-reviews"
import { CourseInstructors } from "./course-instructors"

interface CourseDetailsProps {
  course: Course
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const [tab, setTab] = useState("reviews");
  
  return (
    <div className="w-full p-12">
      <div className="flex w-full space-x-2">
        <Button
          size={"lg"}
          className={`w-33 bg-zinc-800 ${tab === "reviews" && "border-b-2 rounded-none"}`}
          onClick={() => setTab("reviews")}>
          Reviews
        </Button>
        <Button
          size={"lg"}
          className={`w-33 bg-zinc-800 ${tab === "intructors" && "border-b-2 rounded-none"}`}
          onClick={() => setTab("intructors")}>
          Instrutores
        </Button>
      </div>
      {tab === "reviews" ? (
        <CourseReviews/>
      ): (
        <CourseInstructors/>
      )}
    </div>
  )
}