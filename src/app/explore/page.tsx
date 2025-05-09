import NeutralNavBar from "@/shared/neutral-nav-bar";
import { AreaContainer } from "./components/area-container";
import { AreasCarousel } from "./components/areas-carousel";
import { PopularCoursesCarousel } from "./components/popular-courses-carousel";
import { courses, videoHistory } from "../../../data";
import { BackToLearningContainer } from "./components/back-to-learning-carousel";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoggedNavBar } from "@/shared/logged/logged-nav-bar";

export default function ExplorePage() {

  const autenticado = true;
  const userData = {
    nome: "Lucas Hernandes",
    country: "Brazil",
    iconUrl: "https://github.com/shadcn.png",
    ocupation: "Software Developer",
    email: "furquimmsw@gmail.com"
  }
  const areas = [
    {
      "id": 1,
      "name": "Desenvolvimento de software",
      "icon": "gerencia.webp",
      "learners": 1.6
    },
    {
      "id": 2,
      "name": "Gestão de projetos ágeis",
      "icon": "gerencia.webp",
      "learners": 2.1
    },
    {
      "id": 3,
      "name": "Engenharia de dados",
      "icon": "gerencia.webp",
      "learners": 1.9
    },
    {
      "id": 4,
      "name": "Desenvolvimento mobile",
      "icon": "gerencia.webp",
      "learners": 1.4
    },
    {
      "id": 5,
      "name": "Cibersegurança",
      "icon": "gerencia.webp",
      "learners": 1.7
    },
    {
      "id": 6,
      "name": "Inteligência artificial",
      "icon": "gerencia.webp",
      "learners": 2.3
    },
    {
      "id": 7,
      "name": "DevOps e infraestrutura",
      "icon": "gerencia.webp",
      "learners": 1.5
    },
    {
      "id": 8,
      "name": "Desenvolvimento front-end",
      "icon": "gerencia.webp",
      "learners": 1.8
    },
    {
      "id": 9,
      "name": "Desenvolvimento back-end",
      "icon": "gerencia.webp",
      "learners": 2.0
    },
    {
      "id": 10,
      "name": "Arquitetura de software",
      "icon": "gerencia.webp",
      "learners": 1.3
    }
  ]




  return (
    <div className="w-full h-full">
      {autenticado ? (
        <LoggedNavBar country={userData.country} email={userData.email} iconUrl={userData.iconUrl} name={userData.nome} ocupation={userData.ocupation} />
      ) : (
        <NeutralNavBar />
      )}
      {autenticado ? (
        <div className="flex w-full p-10 justify-start items-center pl-10 space-x-5">
          <Avatar className="w-15 h-15">
            <AvatarImage src={userData.iconUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full items-start justify-center space-y-5">
            <h1 className=" text-zinc-200 font-bold text-2xl">
              Bem vindo de volta, {userData.nome}
            </h1>
            <p className="text-zinc-200  text-xl">{userData.ocupation}</p>
          </div>
        </div>

      ) : (
        <h1 className="p-10 text-zinc-200 font-bold text-2xl">
          Aqui o céu é o limite
        </h1>
      )}

      <div className="w-full p-10 flex space-y-8 flex-col">
        <h1 className="text-zinc-200 font-bold text-3xl">Aprenda com as categorias mais populares</h1>
        <AreasCarousel areas={areas} />
      </div>
      {autenticado && (
        <div className="w-full p-10 flex space-y-8 flex-col">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-zinc-200 font-bold text-3xl">Continue de onde parou</h1>
            <Link className="text-zinc-200 underline" href={"/learning"}>Meu estudo</Link>
          </div>
          <BackToLearningContainer courses={videoHistory} />
        </div>
      )}
      <div className="w-full p-10 pt-20 flex space-y-8 flex-col">
        <h1 className="text-zinc-200 font-bold text-3xl">Cursos populares na plataforma</h1>
        <PopularCoursesCarousel courses={courses} />
      </div>
    </div>
  )
}