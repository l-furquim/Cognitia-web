import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/lib/components/ui/button";
import { Footer } from "@/shared/footer";
import NeutralNavBar from "@/shared/neutral-nav-bar";
import { ChartNoAxesCombined, DiamondPercent, DiamondPlus, GraduationCap, LogIn, PackageOpen, TvMinimalPlay } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-[350vh] flex flex-col">
      <div className="p-4 h-full w-full flex flex-col bg-zinc-800 pb-20">
        <NeutralNavBar />
        <div className="w-full flex flex-col space-y-6 items-start p-8 pt-20">
          <h1 className="text-zinc-200 text-4xl font-bold">
            Tudo em <br />
            <span className="text-rose-400">um</span> só <br />
            lugar
          </h1>
          <p className="text-muted-foreground text-2xl w-120 ">
            Aqui você encontra os melhores cursos, com os melhores
            profissionais, em uma única plataforma.
          </p>
          <p className="text-muted-foreground text-2xl w-120">
            Alugue seus cursos
            por um preço baixo, e utilize o mesmo preço para comprar de
            fato caso tenha gostado da qualidade.
          </p>
          <div className="space-x-6 pt-6">
            <Button
              size={"lg"}
              className="w-40 p-3 bg-rose-400 hover:bg-rose-600  border-none text-zinc-200"
              variant={"outline"}>
              Começar
              <LogIn />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-zinc-200 p-4 w-full flex h-190 py-32">
        <div className="flex flex-col h-150 p-8 w-[60%]">
          <h1 className="self-center font-bold text-2xl pt-10 pb-20">
            Features da plataforma
          </h1>
          <div className="w-full h-90  flex flex-col items-center space-y-10">
            <Accordion type="single" collapsible className="w-90 h-full space-y-10">
              <AccordionItem className="border-[1px] pl-3  border-zinc-400 rounded-md" value="item-1">
                <AccordionTrigger>
                  <PackageOpen className="text-rose-400" /> Tudo em um só lugar
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-[1px] pl-3 border-zinc-400 rounded-md" value="item-2">
                <AccordionTrigger>
                  <ChartNoAxesCombined className="text-rose-400" />
                  Atualizações constantes
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-[1px] pl-3 border-zinc-400 rounded-md" value="item-3">
                <AccordionTrigger>
                  <GraduationCap className="text-rose-400" />
                  Certificados reconheciveis
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="w-[60%] bg-zinc-400 rounded-md">
          <h1>Logo aqui depois</h1>
        </div>
      </div>
      <div className="w-full pt-10 bg-zinc-200 bg-gradient-to-br from-zinc-200 via-zinc-200 to-rose-400  h-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl pb-20 flex w-full space-x-3 justify-center">
          <span className="text-rose-400 ">
            Assegure
          </span>

          <span>
            que o conteúdo
          </span>
          <span>
            é de qualidade
          </span>

        </h1>
        <div className="w-full  flex justify-center items-center space-x-6">
          <div className="flex flex-col h-50 hover:scale-120 hover:m-2 transition-transform  bg-zinc-200  w-69 space-y-5 border-b-[2px] rounded-md border-zinc-800 shadow-md p-5">
            <DiamondPercent className="text-rose-400" />
            <p>
              Compre o curso
              apenas por 10 porcento do valor
            </p>
          </div>
          <div className="flex flex-col h-50 hover:scale-120 hover:m-2 transition-transform  bg-zinc-200  w-69 space-y-5 border-b-[2px] rounded-md border-zinc-800 shadow-md p-5">
            <TvMinimalPlay className="text-rose-400" />
            <p>
              Assista ao conteúdo
              e avalie a didatica
            </p>
          </div>
          <div className="flex flex-col h-50 hover:scale-120 hover:m-2 transition-transform  bg-zinc-200  w-69 space-y-5 border-b-[2px] rounded-md border-zinc-800 shadow-md p-5">
            <DiamondPlus className="text-rose-400" />
            <p>
              Termine de comprar o curso
              com a qualidade garantida
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center pb-35 items-center space-y-4 pt-42">
          <h1 className="text-3xl font-semibold text-black">Sua hora chegou.</h1>
          <p className="text-3xl mt-2 pb-10">
            <span className="italic text-rose-400">Impulsione</span>
            <span className="italic text-rose-300"> sua </span>
            <span className="italic text-zinc-800">carreira</span>
          </p>
          <Button
            size={"lg"}
            className="bg-rose-400 font-bold hover:bg-rose-500">
            Começar agora
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
