import ListItem from "./ListItem";
//import Image from "next/image";

const Header = () => {
  return (
    <header className="sm:fixed sm:top-0 sm:left-0 w-full z-50 bg-black text-gray-50 flex flex-col sm:flex-row space-y-4 justify-evenly p-6 items-center shadow-neon">
      <div id="logo">
        <h1 className="text-3xl font-bold text-white text-glow animate-textGlow">
          VD
        </h1>
      </div>
      <ul className="w full flex justify-around gap-8">
        <ListItem text="Início" href="#inicio" />
        <ListItem text="Sobre mim" href="#about" />
        <ListItem text="Projetos" href="#projects" />
        <ListItem text="Contato" href="#contact" />
      </ul>
    </header>
  );
};

export default Header;
