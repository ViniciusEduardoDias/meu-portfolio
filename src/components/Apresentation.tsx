"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

function Apresentation() {
  return (
    <section
      id="inicio"
      className="my-8 md:my-0 md:min-h-screen p-4 flex flex-col flex-wrap sm:flex-row gap-2 sm:gap-10 items-center justify-center text-white"
    >
      <div className="flex flex-col gap-4 items-center text-center justify-center">
        <h2 className="text-2xl">Olá, é um prazer te receber aqui!</h2>
        <h2 className="text-2xl">Meu nome é</h2>
        <h1 className="text-3xl sm:text-5xl font-bold">VINÍCIUS DIAS</h1>
        <h2 className="text-xl text-lime-400 font-bold">Dev Front-End</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/ViniciusEduardoDias"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-400 hover:bg-lime-200 text-black text-xl hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-ed-dias/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl bg-blue-600 hover:bg-blue-800 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src="/persondev.png"
          alt="Descrição da imagem"
          width={600}
          height={200}
          className="sm:mb-0 rounded-md object-contain max-h-[80vh]"
        />

        <a
          href="https://drive.google.com/file/d/1y8iF8c-VyyA4gthT4SaYvjDPwC5hpWWT/view?usp=sharing"
          target="_blank"
          download
          className="flex max-w-80 items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          <FaDownload />
          Baixar Currículo
        </a>
      </div>
    </section>
  );
}

export default Apresentation;
