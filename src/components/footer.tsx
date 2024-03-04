import React from "react";
import { FooterLinks, Gallery } from "../constants";

export function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-48">
        {Gallery.map((item) => (
          <img
            src={item.image_url}
            key={item.id}
            alt=""
            className="md:w-1/4 w-full"
          />
        ))}
      </div>
      <div className="bg-dark-footer text-center flex flex-col items-center justify-center p-10">
        <img src="/images/logo.svg" alt="" />
        <ul className="block md:flex gap-16 mt-6 ">
          {FooterLinks.map((item) => (
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
      </div>
    </div>
  );
}
