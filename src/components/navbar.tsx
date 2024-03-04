import React from "react";
import { NavLinks } from "../constants";

export function Nav() {
  return (
    <header className="bg-hero-pattern h-[800px] bg-cover bg-center">
      <nav className=" flex justify-around items-center pt-4 ">
        <img src="/images/logo.svg" alt="" className="w-40" />
        <ul className="hidden md:flex gap-16 ">
          {NavLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="hover: hover:font-semibold transition duration-150 ease-out text-white font-medium text-lg"
              >
                {item.label_Ref}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center h-full gap-12">
        <h1 className="text-6xl font-semibold text-white text-center">We are creatives </h1>
        <img src="/images/icon-arrow-down.svg" alt=""  className="animate-bounce"/>
      </div>
    </header>
  );
}
