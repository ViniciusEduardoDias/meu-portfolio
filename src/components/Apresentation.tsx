"use client";
import Image from "next/image";
import Button from "./Button";

function Apresentation() {
  return (
    <section
      id="inicio"
      className="min-h-screen p-4 flex flex-col flex-wrap sm:flex-row gap-2 md:gap-10 items-center justify-center text-white"
    >
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl">Olá, é um prazer te receber aqui!</h2>
        <h2 className="text-2xl">Meu nome é</h2>
        <h1 className="text-3xl sm:text-5xl font-bold">VINÍCIUS DIAS</h1>
        <h2 className="text-xl text-lime-400 font-bold">e sou Dev Front-End</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            text=""
            image="/github.png"
            onclick={() =>
              window.open("https://github.com/ViniciusEduardoDias", "_blank")
            }
          />
          <Button
            text=""
            image="/linkedin.png"
            onclick={() =>
              window.open(
                "https://www.linkedin.com/in/vinicius-ed-dias/",
                "_blank"
              )
            }
          />
        </div>
      </div>
      <div>
        <Image
          src="/persondev.png"
          alt="Descrição da imagem"
          width={600}
          height={600}
          className="mb-24 sm:mb-0 rounded-md object-contain max-h-[80vh]"
        />
      </div>
    </section>
  );
}

export default Apresentation;
