"use client";

import Image from "next/image";

type PropsButton = {
  text?: string;
  image?: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = ({ text, onclick, image }: PropsButton) => {
  return (
    <button
      className="flex items-center gap-2 px-4 py-1 bg-white rounded-full font-bold transition-shadow duration-300 hover:shadow-[0_0_20px_#22c55e]"
      onClick={onclick}
    >
      {image && (
        <Image
          src={image}
          alt={`${text} logo`}
          width={80}
          height={10}
          className="object-contain"
        />
      )}
      {text}
    </button>
  );
};
export default Button;
