"use client";
import React from "react";
import hero from "../../public/hero.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <div id="hero">
      <section className="blue md:pt-[100px] ">
        <div className="center flex md:justify-around flex-wrap justify-center items-center  w-full">
          <div className="">
            <h1 className="text-4xl font">
              Hi I&apos;m<strong> Omar Hajmui</strong>
            </h1>
            <ReactTyped
              strings={[
                "I'm a Software Engineer",
                "and",
                "I'm a Full-Stack developer",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
            <p className="md:w-[50%] mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              tempore perferendis fugiat aspernatur dignissimos,
            </p>
            <div className="flex  mt-5 gap-4 text-xl">
              <FaLinkedin />
              <FaGithub />
              <FaFacebookSquare />
            </div>
            <button className="mt-5 p-3 bg-gradient-to-r from-rose-500 to-red-400  rounded-md font-medium">
              Contact Me
            </button>
          </div>
          <div className="w-[400px] h-[450px] relative rounded-full overflow-hidden lg:rounded-none ">
            <Image src={hero} fill alt="hero" />
          </div>
        </div>

        <div className="curve"></div>
      </section>
    </div>
  );
}

export default Header;
