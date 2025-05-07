"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/lib/components/ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { div } from "framer-motion/client";
import { CountrySelector } from "@/app/(auth)/register/components/country-selector";
import { AreaSelector } from "./area-selector";
import { Github, Twitter } from "lucide-react";

export default function RegisterForm(){
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  function loadOtherForm(){

  }


  return (
    <div>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <>
          <h1 className="text-xl font-bold">
            Seu estudo começa aqui
          </h1>
          <div className="flex w-75 justify-center items-center space-x-4 pt-10">
                <Button className="w-20">
                  <Github/>
                </Button>
                <Button className="w-20">
                  Google
                </Button>
                <Button className="w-20">
                  <Twitter/>
                </Button>
            </div>
          <div className="flex items-center pt-4">
                <hr className="flex-grow border-s w-31 border-muted-foreground"/>
                <span className="mx-4 text-gray-500 text-sm">ou</span>
                <hr className="flex-grow border-s w-31 border-muted-foreground" />
          </div>
          <motion.form
            key="form1"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 pt-3 w-full"
          >
            <div className="space-y-3">
              <Label htmlFor="inputName">Como devemos te chamar?</Label>
              <Input
                className="bg-zinc-100 w-75 placeholder:text-xs"
                id="inputName"
                placeholder="Lucas Hernandes"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="inputEmail">Qual seu email de preferência?</Label>
              <Input
                className="bg-zinc-100 w-75 placeholder:text-xs"
                id="inputEmail"
                placeholder="furquimmsw@gmail.cm"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="inputPassword">Escolha uma senha</Label>
              <Input
                type="password"
                className="bg-zinc-100 w-full placeholder:text-xs"
                id="inputPassword"
                placeholder="*****"
              />
            </div>

            <motion.button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-primary text-primary-foreground hover:cursor-pointer  h-9 px-5 py-2 rounded-md"
            >
              Próximo
            </motion.button>
          </motion.form>
          </>
        )}

        {step === 2 && (
            <motion.form
              key="form2"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 pt-3 w-full"
            >

            <div className="space-y-3 flex flex-col">
              <Label htmlFor="countrySelector">De onde vem?</Label>
              <CountrySelector/>
            </div>

            <div className="space-y-3 flex flex-col">
              <Label htmlFor="areaSelector">Quais áreas possuí interesse?</Label>
              <AreaSelector/>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground h-9 px-4 py-2 rounded-md"
            >
              Finalizar
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      {step === 1 && (
        <div className="mt-4 text-muted-foreground flex space-x-1">
          <p>Já possui uma conta?</p>
          <Link className="text-zinc-800 font-bold" href="/login">
            Entrar
          </Link>
        </div>
      )}
    </div>
  )
}