import { socialMedia } from "@/data";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let's get in <span className="text-purple">touch</span>
        </h1>
        <div className="flex items-center md:gap-3 gap-6 mt-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank">
                <img
                  src={profile.img}
                  alt={String(profile.id)}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Shahaf
      </p>
    </footer>
  );
}
