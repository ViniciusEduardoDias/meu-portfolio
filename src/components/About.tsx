"use client";
import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col-reverse sm:flex-row sm:flex-wrap items-center justify-center gap-10 px-4 text-white"
    >
      <div>
        <Image
          src="/myPhoto.jpg"
          alt="Vinícius Eduardo Dias"
          width={300}
          height={250}
          className="rounded-md object-cover w-100 h-auto"
        />
      </div>

      <div className="max-w-xl flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-center md:text-left">
          Sobre mim
        </h2>
        <p className="text-justify">
          Tenho 23 anos e sou desenvolvedor front-end. Me formei em Informática
          para Internet pela ETEC em 2018 e, desde 2022, curso Bacharelado em
          Tecnologia da Informação. Durante minha trajetória, me dediquei a
          estudar diversas linguagens de programação como Java e Python, mas foi
          com JavaScript que me identifiquei de verdade — especialmente
          trabalhando com frameworks como React e Next.js, com ou sem
          TypeScript.
        </p>
        <p className="text-justify">
          Participei de diversos projetos durante os estudos e também por
          iniciativa própria, sempre buscando aplicar na prática o que aprendo.
          Além da área de tecnologia, atuei por seis anos em uma loja de
          fotografia, exercendo funções como designer gráfico, editor de imagens
          e, no último ano, supervisor. Essa experiência contribuiu muito para
          meu desenvolvimento pessoal, especialmente em trabalho em equipe,
          criatividade e responsabilidade.
        </p>
      </div>
    </section>
  );
}

export default About;
