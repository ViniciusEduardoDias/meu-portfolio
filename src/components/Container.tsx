import { ReactNode } from "react";

type PropsContainer = {
  children: ReactNode;
};

function Container({ children }: PropsContainer) {
  return (
    <main className="w-full px-2 sm:pt-18 sm:w-3/4 md:w-4/5 lg:scale-90 m-auto">
      {children}
    </main>
  );
}

export default Container;
