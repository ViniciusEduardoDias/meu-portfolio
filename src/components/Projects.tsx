"use client";
import { useEffect, useState } from "react";
import Card from "./Card";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ViniciusEduardoDias/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section
      id="projects"
      className="my-8 md:my-0 md:min-h-screen px-8 sm:px-4 py-10"
    >
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl text-white font-semibold">Projetos</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {repos.map((repo) => {
          const image = `/projects/${repo.name}.jpg`.replace(
            /\.(jpg|JPG|jpeg|JPEG)$/,
            ".jpg"
          );

          return (
            <Card
              key={repo.id}
              nameProject={repo.name}
              image={image}
              link={repo.html_url}
            />
          );
        })}
      </div>
    </section>
  );
}
