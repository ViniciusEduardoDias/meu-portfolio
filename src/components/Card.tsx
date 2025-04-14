"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

type CardProps = {
  image?: string;
  nameProject: string;
  description?: string;
  link?: string;
};

function Card({ image, nameProject, link }: CardProps) {
  const [imgSrc, setImgSrc] = useState(image || "/placeholder.svg");

  return (
    <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out hover:scale-110">
      <div className="aspect-video w-full">
        <Image
          src={imgSrc}
          onError={() => setImgSrc("/placeholder.svg")}
          className="w-full h-full object-cover"
          alt={`screenshot do projeto ${nameProject}`}
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-3 text-sm text-gray-600">
        <div>
          <h2 className="text-xl font-semibold mb-4">{nameProject}</h2>
        </div>
        <Button
          className="w-full rounded-sm shadow-sm mt-4"
          text="Ver Projeto"
          onclick={() => window.open(`${link}`, "_blank")}
        />
      </div>
    </div>
  );
}

export default Card;
