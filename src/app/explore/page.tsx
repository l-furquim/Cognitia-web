import NeutralNavBar from "@/shared/neutral-nav-bar";
import { AreaContainer } from "./components/area-container";
import { AreasCarousel } from "./components/areas-carousel";
import { PopularCoursesCarousel } from "./components/popular-courses-carousel";
import { courses } from "../../../data";

export default function ExplorePage() {

  const autenticado = false;
  const userData = {
    nome: "Lucas Hernandes",
    country: "Brazil"
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
        <h1>naav</h1>
      ) : (
        <NeutralNavBar />
      )}
      {autenticado ? (
        <h1 className="p-10 text-zinc-200 font-bold text-2xl">
          Bem vindo de volta, {userData.nome}
        </h1>
      ) : (
        <>
          <h1 className="p-10 text-zinc-200 font-bold text-2xl">
            Aqui o céu é o limite
          </h1>
          <div className="w-fulll p-10 flex space-y-8 flex-col">
            <h1 className="text-zinc-200 font-bold text-3xl">Aprenda com as categorias mais populares</h1>
            <AreasCarousel areas={areas} />
          </div>
          <div className="w-fulll p-10 pt-20 flex space-y-8 flex-col">
            <h1 className="text-zinc-200 font-bold text-3xl">Cursos populares na plataforma</h1>
            <PopularCoursesCarousel courses={courses} />
          </div>
        </>
      )}
    </div>
  )
}