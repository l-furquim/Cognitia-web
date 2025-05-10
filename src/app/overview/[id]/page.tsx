import type { Course } from "@/@types/course-types";
import { LoggedNavBar } from "@/shared/logged/logged-nav-bar";
import NeutralNavBar from "@/shared/neutral-nav-bar";
import Image from "next/image";
import { courses } from "../../../../data";
import { GlobeIcon, PlayCircle, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseDetails } from "../components/course-details";

interface PageProps {
  params: {
    id: number
  }
}

export default function OverviewPage({ params }: PageProps) {
  const autenticado = true;

  const userData = {
    nome: "Lucas Hernandes",
    country: "Brazil",
    iconUrl: "https://github.com/shadcn.png",
    ocupation: "Software Developer",
    email: "furquimmsw@gmail.com"
  }

  const userHaveThisCourse: boolean = true;

  const courseData: Course = courses[0];

  return (
    <div className="w-full h-full">
      {autenticado ? (
        <LoggedNavBar country={userData.country} email={userData.email} iconUrl={userData.iconUrl} name={userData.nome} ocupation={userData.ocupation} />
      ) : (
        <NeutralNavBar />
      )}
      <div className="w-full p-3 h-82 flex space-x-10 justify-center">
        <div className="relative w-[500px] h-full">
          <Image
            className="opacity-80"
            layout="fill"
            objectFit="cover"
            src="https://marketplace.canva.com/EAFNgl2fFFo/1/0/1600w/canva-miniatura-youtube-v%C3%ADdeo-curioso-gr%C3%A1tis-4BU-L3rT9uA.jpg"
            alt="Course thumb image"
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <PlayCircle size={60} />
          </span>
        </div>

        <div className="h-full w-[50%] flex flex-col items-start space-y-5">
          <h1 className="font-bold text-zinc-200 text-3xl">
            {courseData.title}
          </h1>
          <p className="text-zinc-400">
            {courseData.description} {/* mudar isso aqui depois */}
          </p>
          <div className="flex items-center space-x-3">
            <span className="text-orange-300">
              {courseData.totalRate}
            </span>
            <span className="text-muted-foreground">
              {`(${courseData.totalReviews} reviews)`}
            </span>
            <p className="text-zinc-400 text-sm">
              {courseData.totalStudents} estudantes
            </p>
          </div>
          <p className="text-zinc-200">
            Criado por
            <Link href={"/user/" + 1} className="pl-1">
              <span className="text-purple-300">{courseData.people}</span>
            </Link>
          </p>
          <p className="text-zinc-200 text-sm w-full flex items-center">
            <GlobeIcon size={15} className="mr-2" />
            {courseData.language}
          </p>
          {userHaveThisCourse ? (
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-full mt-auto hover:cursor-pointer">
              Ir para o curso
            </Button>
          ) : (
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-full mt-auto hover:cursor-pointer">
              Adicionar ao carrinho <PlusCircleIcon />
            </Button>
          )}
        </div>
      </div>
      <CourseDetails course={courseData} />
    </div>
  )
}